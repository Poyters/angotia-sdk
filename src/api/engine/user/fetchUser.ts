import { User } from "../../../interfaces/user.interface";
import { engineApiUrl } from "../config";
import { requestHandler } from "../../requestHandler";

/**
 * Creates Angotia user (API) based on token. There is possibility to create
 * only one "Angotia Account" related to SSO account. So sso id is hightly
 * connected with "Angotia Account"
 *
 * ### Example
 * ```js
 * createUser("token")
 * // => [null, User]
 * ```
 *
 * @param token - Token provided by SSO
 * @returns Tuple of [Error, User]
 */
export const fetchUser = (token: string) =>
  requestHandler<User>(
    `${engineApiUrl}/user/profile`,
    "GET",
    {
      start: "FETCHING_ANGOTIA_USER",
      end: "FETCHED_ANGOTIA_USER",
      err: "FETCH_ANGOTIA_USER_ERROR"
    },
    {
      Authorization: `Bearer ${token}`
    }
  );
