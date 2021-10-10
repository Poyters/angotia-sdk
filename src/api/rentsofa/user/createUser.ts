import { User } from "../../../interfaces/user.interface";
import { logger } from "../../../config/logger";
import { AccountType } from "../../../models/accountType.model";
import fetch from "node-fetch";
import { Result, Error } from "../../../types/result.type";

export const createUser = async (
  token: string,
  accountType: AccountType,
  firstName: string,
  lastName: string
): Promise<Result<User>> => {
  logger.write("CREATING_RENTSOFA_USER");

  try {
    const newUserDTO = JSON.stringify({
      accountType,
      firstName,
      lastName
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/users/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: newUserDTO
      }
    );

    const responseBody = await response.json();

    logger.write("CREATING_RENTSOFA_USER_RES", { responseBody });

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as User];
  } catch (error) {
    logger.write("CREATING_RENTSOFA_USER_ERROR", { error });
    throw new Error(error);
  }
};
