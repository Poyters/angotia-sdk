import { Offer } from "../../../interfaces/offer.interface";
import { logger } from "../../../config/logger";
import fetch from "node-fetch";
import { Result, Error } from "../../../types/result.type";

export const fetchOfferById = async (id: string): Promise<Result<Offer>> => {
  logger.write("FETCHING_OFFER_BY_ID");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/offers/${id}`,
      {
        method: "GET"
      }
    );

    const responseBody = await response.json();

    logger.write("FETCHED_OFFER_BY_ID", { responseBody });

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as Offer];
  } catch (error) {
    logger.write("FETCH_OFFER_BY_ID_ERR", { error });
    throw new Error(error);
  }
};
