import axios, { Method, AxiosResponseHeaders } from "axios";
import { logger } from "../config/internal/logger";
import { Result, Error } from "../types/result.type";
import { undefinedError } from "../config/internal/error";

interface LogMarks {
  start: string;
  end: string;
  err: string;
}

export async function requestHandler<T>(
  requestUrl: string,
  httpMethod: Method,
  logMarks: LogMarks,
  headers?: AxiosResponseHeaders,
  body?
): Promise<Result<T>> {
  logger.write(logMarks.start);

  try {
    const response = await axios(requestUrl, {
      method: httpMethod,
      headers: {
        ...headers
      },
      data: body
    });

    const responseData = response.data;

    logger.write(logMarks.end, { responseData });

    return [null, responseData as T];
  } catch (error) {
    const errorData = (error?.response?.data as Error) || undefinedError;

    logger.write(logMarks.err, {
      requestUrl,
      httpMethod,
      headers,
      body,
      error: errorData?.statusCode
    });

    return [errorData, null];
  }
}
