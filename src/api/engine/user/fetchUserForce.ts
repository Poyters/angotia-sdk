import { fetchUser } from "./fetchUser";
import { createUser } from "./createUser";
import { User } from "../../../interfaces/user.interface";
import { logger } from "../../../config/logger";
import { Result } from "../../../types/result.type";

/**
 * Fetch user data. After failure trying to create user based on the same token
 *
 * ### Example
 * ```js
 * fetchUserForce("token")
 * // => [null, User]
 * ```
 *
 * @param token - Token provided by SSO
 * @returns Tuple of [Error, User]
 */
export const fetchUserForce = async (token: string): Promise<Result<User>> => {
  try {
    logger.write("FORCE_FETCHING_ANGOTIA_USER");

    const [fetchError, fetchedUser] = await fetchUser(token);

    logger.write("FORCE_FETCHED_ANGOTIA_USER", {
      userId: fetchedUser?.id ?? null,
      fetchError
    });

    if (fetchError) {
      return await createUser(token);
    }

    return [null, fetchedUser];
  } catch (error) {
    logger.write("FORCE_FETCHING_ANGOTIA_USER_ERROR", { error });
    throw new Error(error);
  }
};
