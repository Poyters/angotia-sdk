import { logger } from "../../../config/logger";
import { NewOffer, Offer } from "../../../interfaces/offer.interface";
import fetch from "node-fetch";
import { Result, Error } from "../../../types/result.type";

export const createOffer = async (
  token: string,
  offer: NewOffer
): Promise<Result<Offer>> => {
  logger.write("CREATING_OFFER");

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/offers/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(offer)
      }
    );

    const responseBody = await response.json();

    logger.write("CREATING_OFFER_RES", { responseBody });

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as Offer];
  } catch (error) {
    logger.write("CREATING_OFFER_ERROR", { error });
    throw new Error(error);
  }
};
