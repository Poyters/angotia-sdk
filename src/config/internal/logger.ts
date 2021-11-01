import { Logger } from "../../utils/logger";
import { logsConfig } from "./logs.config";
import { Controls } from "../../models/controls.model";

const envSettings =
  process.env.NEXT_PUBLIC_SDK_LOGGER ||
  process.env.SDK_LOGGER ||
  process.env.REACT_APP_SDK_LOGGER;
const presentLogger = envSettings === Controls.enabled;

export const logger = new Logger(logsConfig, presentLogger);

logger.write("ACTIVED_LIB_LOGGER");
