import { UserProfile } from "../../../interfaces/user.interface";
import { logger } from "../../../config/logger";
import { Result, Error } from "../../../types/result.type";
import fetch from "node-fetch";

export const updateUserProfile = async (
  token: string,
  profile: UserProfile
): Promise<Result<UserProfile>> => {
  logger.write("UPDATING_USER_PROFILE", { profile });

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/users/update-profile`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(profile)
      }
    );

    const responseBody = await response.json();

    logger.write("UPDATED_USER_PROFILE", { responseBody });

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as UserProfile];
  } catch (error) {
    logger.write("UPDATE_USER_PROFILE_ERR", { error });
    throw new Error(error);
  }
};
