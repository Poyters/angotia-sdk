import { Character } from "../../../interfaces/character.interface";
import { logger } from "../../../config/logger";
import { Result, Error } from "../../../types/result.type";
import axios from "axios";
import { engineApiUrl } from "../config";

/**
 * Fetch character by unique nick
 *
 * ### Example
 * ```js
 * fetchCharacterByNick("token")
 * // => [null, Character]
 * ```
 *
 * @param nick - Character nick
 * @returns Tuple of [Error, Character]
 */
export const fetchCharacterByNick = async (
  nick: string
): Promise<Result<Character>> => {
  logger.write("FETCH_CHARACTER_BY_NICK", { nick });

  try {
    const response = await axios(`${engineApiUrl}/character/nick/${nick}`, {
      method: "GET"
    });

    const responseData = response.data;

    logger.write("FETCHED_CHARACTER_BY_NICK", { nick, responseData });

    return [null, responseData as Character];
  } catch (error) {
    logger.write("FETCH_CHARACTER_BY_NICK_ERR", {
      nick,
      error: error?.response?.data?.statusCode
    });
    return [error.response.data as Error, null];
  }
};
