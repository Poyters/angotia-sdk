import { User } from "../../../interfaces/user.interface";
import { logger } from "../../../config/logger";
import { Result, Error } from "../../../types/result.type";
import axios from "axios";

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
export const createUser = async (token: string): Promise<Result<User>> => {
  logger.write("CREATING_ANGOTIA_USER");

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_ENGINE_URL}/user/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const responseData = response.data;

    logger.write("CREATED_ANGOTIA_USER", { responseData });

    if (response.statusText !== "OK") {
      return [responseData as Error, null];
    }

    return [null, responseData as User];
  } catch (error) {
    logger.write("CREATING_ANGOTIA_USER_ERROR", { error });
    throw new Error(error);
  }
};
