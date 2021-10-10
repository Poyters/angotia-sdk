import { OfferSummary } from "../../../interfaces/offer.interface";
import { logger } from "../../../config/logger";
import fetch from "node-fetch";
import { Result, Error } from "../../../types/result.type";

export const fetchAllSummaries = async (): Promise<Result<OfferSummary[]>> => {
  logger.write("FETCHING_ALL_SUMMARIES");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/offers/summaries`,
      { method: "GET" }
    );

    const responseBody = await response.json();

    logger.write("FETCHED_ALL_SUMMARIES");

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as OfferSummary[]];
  } catch (error) {
    logger.write("FETCH_OFFER_SUMMARIES_ERR", { error });
    throw new Error(error);
  }
};
