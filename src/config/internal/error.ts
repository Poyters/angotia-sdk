import { Error } from "../../types/result.type";

export const undefinedError: Error = {
  statusCode: 500,
  message: "Could not define error message from HTTP request"
};
