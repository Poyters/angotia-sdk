import { fetchUser } from "./fetchUser";
import { createUser } from "./createUser";
import { User } from "../../../interfaces/user.interface";
import { logger } from "../../../config/logger";
import { AccountType } from "../../../models/accountType.model";
import { Result } from "../../../types/result.type";

// Fetch user data. After failure trying to create user based on the same token
export const fetchUserForce = async (
  token: string,
  accountType: AccountType,
  firstName: string,
  lastName: string
): Promise<Result<User>> => {
  try {
    logger.write("FORCE_FETCHING_RENTSOFA_USER");

    const [fetchError, fetchedUser] = await fetchUser(token);

    logger.write("FORCE_FETCHED_RENTSOFA_USER", {
      userId: fetchedUser?._id ?? null,
      fetchError
    });

    if (fetchError) {
      return await createUser(token, accountType, firstName, lastName);
    }

    return [null, fetchedUser];
  } catch (error) {
    logger.write("FORCE_FETCHING_RENTSOFA_USER_ERROR", { error });
    throw new Error(error);
  }
};
