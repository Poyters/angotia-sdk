import { logger } from "../../../config/logger";
import { NewOffer, Offer } from "../../../interfaces/offer.interface";
import fetch from "node-fetch";
import { Result, Error } from "../../../types/result.type";

export const editOffer = async (
  token: string,
  offer: NewOffer,
  offerId: string
): Promise<Result<Offer>> => {
  logger.write("EDITING_OFFER", { offer });

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_RENTSOFA_API_URL}/offers/edit/${offerId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(offer)
      }
    );

    const responseBody = await response.json();

    logger.write("FINISH_EDIT_OFFER", { responseBody });

    if (response.status !== 200 && response.status !== 201) {
      return [responseBody as Error, null];
    }

    return [null, responseBody as Offer];
  } catch (error) {
    logger.write("EDITING_OFFER_ERROR", { error });
    throw new Error(error);
  }
};
