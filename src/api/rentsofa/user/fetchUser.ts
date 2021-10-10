import { User } from "../../../interfaces/user.interface";
import { logger } from "../../../config/logger";
import fetch from "node-fetch";
import { Result, Error } from "../../../types/result.type";

export const fetchUser = async (token: string): Promise<Result<User>> => {
  logger.write("FETCHING_RENTSOFA_USER");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/users/profile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const responseBody = await response.json();

    logger.write("FETCHED_RENTSOFA_USER", { responseBody });

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as User];
  } catch (error) {
    logger.write("FETCH_RENTSOFA_USER_ERR", { error });
    throw new Error(error);
  }
};
