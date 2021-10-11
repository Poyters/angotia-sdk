import { Character } from "../../../interfaces/character.interface";
import { logger } from "../../../config/logger";
import { Result, Error } from "../../../types/result.type";
import { engineApiUrl } from "../config";
import axios from "axios";

/**
 * Fetch all characters assigned to passed user (token)
 *
 * ### Example
 * ```js
 * fetchCharacters("token")
 * // => [null, Character[]]
 * ```
 *
 * @param token - Token provided by SSO
 * @returns Tuple of [Error, Character[]]
 */
export const fetchCharacters = async (
  token: string
): Promise<Result<Character[]>> => {
  logger.write("FETCH_USER_CHARACTERS");

  try {
    const response = await axios(`${engineApiUrl}/user/characters`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const responseData = response.data;

    logger.write("FETCHED_USER_CHARACTERS", { responseData });

    return [null, responseData as Character[]];
  } catch (error) {
    logger.write("FETCH_USER_CHARACTERS_ERR", {
      error: error?.response?.data?.statusCode
    });
    return [error.response.data as Error, null];
  }
};
