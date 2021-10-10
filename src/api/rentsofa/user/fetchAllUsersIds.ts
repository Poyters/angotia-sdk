import { logger } from "../../../config/logger";
import fetch from "node-fetch";
import { Result, Error } from "../../../types/result.type";

// Returns RentSofa API users ids
export const fetchAllUsersIds = async (): Promise<Result<string[]>> => {
  logger.write("FETCHING_ALL_USERS_IDS");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/users/ids`,
      {
        method: "GET"
      }
    );

    const responseBody = await response.json();

    logger.write("FETCHED_ALL_USERS_IDS", { responseBody });

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as string[]];
  } catch (error) {
    logger.write("GET_USER_IDS_ERR", { error });
    throw new Error(error);
  }
};
