import { Character } from "../../../interfaces/character.interface";
import { engineApiUrl } from "../config";
import { requestHandler } from "../../requestHandler";

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
export const fetchCharacters = (token: string) =>
  requestHandler<Character[]>(
    `${engineApiUrl}/user/characters`,
    "GET",
    {
      start: "FETCH_USER_CHARACTERS",
      end: "FETCHED_USER_CHARACTERS",
      err: "FETCH_USER_CHARACTERS_ERR"
    },
    {
      Authorization: `Bearer ${token}`
    }
  );
