import { deepCopy } from "../utils/deepCopy";
import { isEmptyObject } from "../utils/isEmptyObject";
import { Log } from "../models/log.model";
import { LogConfig } from "../interfaces/logger.interface";

/**
 * Constructs a new Logger to track what's goin on in your application
 *
 * ### Example deep copy
 * ```js
 * const config = {
 *   APP_STARTED: {
 *     message: "Application started"
 *   },
 * }
 * const logger = newLogger(config, true)
 * logger.write("APP_STARTED")
 * // => "10/5/2021, 3:35:59 PM | INFO | Application started"
 * ```
 */
export class Logger {
  config: LogConfig;
  isEnabled: boolean;

  constructor(config: LogConfig, isEnabled: boolean) {
    this.config = config;
    this.isEnabled = isEnabled;
  }

  public write = (logId: string, additionalData = {}) => {
    if (!this.isEnabled) return;

    const logMessage = this.config?.[logId]?.message;

    if (!this.config?.[logId]) {
      const logIdCopy = deepCopy(logId);

      logId = "UNKNOWN_LOG";
      additionalData = {
        invalidEventData: { ...additionalData },
        invalidLogId: logIdCopy
      };
    }

    const logLevel = this.config?.[logId]?.level ?? Log.info;
    const date = new Date();
    const additionalInfo = isEmptyObject(additionalData)
      ? ""
      : `| ${JSON.stringify(additionalData)}`;

    console.log(
      `${date.toLocaleString(
        "pl-PL"
      )} | ${logLevel} | ${logMessage} ${additionalInfo}`
    );
  };
}
