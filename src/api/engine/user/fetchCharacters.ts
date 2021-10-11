import { Character } from "../../../interfaces/character.interface";
import { logger } from "../../../config/logger";
import { Result, Error } from "../../../types/result.type";
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
    const response = await axios(
      `${process.env.NEXT_PUBLIC_ENGINE_URL}/user/characters`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const responseData = response.data;

    logger.write("FETCHED_USER_CHARACTERS", { responseData });

    if (response.statusText !== "OK") {
      return [responseData as Error, null];
    }

    return [null, responseData as Character[]];
  } catch (error) {
    logger.write("FETCH_USER_CHARACTERS_ERR", { error });
    throw new Error(error);
  }
};
