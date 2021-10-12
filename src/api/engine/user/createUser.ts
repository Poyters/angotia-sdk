import { User } from "../../../interfaces/user.interface";
import { logger } from "../../../config/logger";
import { Result, Error } from "../../../types/result.type";
import { engineApiUrl } from "../config";
import axios from "axios";
import { undefinedError } from "../../../config/error";

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
    const response = await axios.get(`${engineApiUrl}/user/create`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const responseData = response.data;

    logger.write("CREATED_ANGOTIA_USER", { responseData });

    return [null, responseData as User];
  } catch (error) {
    const errorData = (error?.response?.data as Error) || undefinedError;

    logger.write("CREATING_ANGOTIA_USER_ERROR", {
      error: errorData?.statusCode
    });

    return [errorData, null];
  }
};
