import { logger } from "../../../config/logger";
import fetch from "node-fetch";
import { Result, Error } from "../../../types/result.type";

export const fetchAllOffersIds = async (): Promise<Result<string[]>> => {
  logger.write("FETCHING_ALL_OFFERS_IDS");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/offers/ids`,
      {
        method: "GET"
      }
    );

    const responseBody = await response.json();

    logger.write("FETCHED_ALL_OFFERS_IDS", { responseBody });

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as string[]];
  } catch (error) {
    logger.write("GET_OFFER_IDS_ERR", { error });
    throw new Error(error);
  }
};
