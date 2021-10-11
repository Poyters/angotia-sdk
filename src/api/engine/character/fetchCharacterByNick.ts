import { Character } from "../../../interfaces/character.interface";
import { logger } from "../../../config/logger";
import { Result, Error } from "../../../types/result.type";
import axios from "axios";

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
  logger.write("FETCH_CHARACTER_BY_NICK");

  try {
    const response = await axios(
      `${process.env.NEXT_PUBLIC_ENGINE_URL}/character/nick`,
      {
        method: "GET",
        params: {
          nick: nick
        }
      }
    );

    const responseData = response.data;

    logger.write("FETCHED_CHARACTER_BY_NICK", { responseData });

    if (response.statusText !== "OK") {
      return [responseData as Error, null];
    }

    return [null, responseData as Character];
  } catch (error) {
    logger.write("FETCH_CHARACTER_BY_NICK_ERR", { error });
    throw new Error(error);
  }
};
