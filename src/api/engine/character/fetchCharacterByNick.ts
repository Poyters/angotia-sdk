import { Character } from "../../../interfaces/character.interface";
import { engineApiUrl } from "../config";
import { requestHandler } from "../../requestHandler";

/**
 * Fetch character by unique nick
 *
 * ### Example
 * ```js
 * fetchCharacterByNick("nick")
 * // => [null, Character]
 * ```
 *
 * @param nick - Character nick
 * @returns Tuple of [Error, Character]
 */
export const fetchCharacterByNick = (nick: string) =>
  requestHandler<Character>(`${engineApiUrl}/character/nick/${nick}`, "GET", {
    start: "FETCH_CHARACTER_BY_NICK",
    end: "FETCHED_CHARACTER_BY_NICK",
    err: "FETCH_CHARACTER_BY_NICK_ERR"
  });
