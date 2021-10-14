import { Character } from "../../../interfaces/character.interface";
import { logger } from "../../../config/logger";
import { Result, Error } from "../../../types/result.type";
import axios from "axios";
import { engineApiUrl } from "../config";
import { undefinedError } from "../../../config/error";
import { NewCharacter } from "../../../interfaces/character.interface";

/**
 * Create character assigned to user who made a request
 *
 * ### Example
 * ```js
 * createCharacter("token", NewCharacter)
 * // => [null, Character]
 * ```
 *
 * @param nick - Character nick
 * @returns Tuple of [Error, Character]
 */
export const createCharacter = async (
  token: string,
  newCharacter: NewCharacter
): Promise<Result<Character>> => {
  logger.write("CREATE_CHARACTER", { newCharacter });

  try {
    const response = await axios(`${engineApiUrl}/character/create`, {
      method: "POST",
      data: newCharacter,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const responseData = response.data;

    logger.write("CREATED_CHARACTER", { newCharacter, responseData });

    return [null, responseData as Character];
  } catch (error) {
    const errorData = (error?.response?.data as Error) || undefinedError;

    logger.write("CREATE_CHARACTER_ERR", {
      newCharacter,
      error: errorData?.statusCode
    });

    return [errorData, null];
  }
};
