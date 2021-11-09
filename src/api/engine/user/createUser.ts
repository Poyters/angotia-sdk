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
export const createUser = (token: string) =>
  requestHandler<User>(
    `${engineApiUrl}/users/create`,
    "POST",
    {
      start: "CREATING_ANGOTIA_USER",
      end: "CREATED_ANGOTIA_USER",
      err: "CREATING_ANGOTIA_USER_ERROR"
    },
    {
      Authorization: `Bearer ${token}`
    }
  );
