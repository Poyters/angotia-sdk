import { Character } from "../../../interfaces/character.interface";
import { engineApiUrl } from "../config";
import { NewCharacter } from "../../../interfaces/character.interface";
import { requestHandler } from "../../requestHandler";

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
export const createCharacter = (token: string, newCharacter: NewCharacter) =>
  requestHandler<Character>(
    `${engineApiUrl}/character/create`,
    "POST",
    {
      start: "CREATE_CHARACTER",
      end: "CREATED_CHARACTER",
      err: "CREATE_CHARACTER_ERR"
    },
    {
      Authorization: `Bearer ${token}`
    },
    newCharacter
  );
