import { UserPublic } from "../../../interfaces/user.interface";
import { logger } from "../../../config/logger";
import fetch from "node-fetch";
import { Result, Error } from "../../../types/result.type";

export const fetchPublicUser = async (
  userId: string
): Promise<Result<UserPublic>> => {
  logger.write("FETCHING_USER_PUBLIC_DATA");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/users/public-data/${userId}`,
      {
        method: "GET"
      }
    );

    const responseBody = await response.json();

    logger.write("FETCHED_USER_PUBLIC_DATA", { responseBody });

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as UserPublic];
  } catch (error) {
    logger.write("FETCH_RENTSOFA_PUBLIC_USER_ERR", { error });
    throw new Error(error);
  }
};
