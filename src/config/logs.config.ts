import { Log } from "../models/log.model";

export const logsConfig = {
  UNKNOWN_LOG: {
    message: "Unknown log",
    level: Log.warning
  },
  ACTIVED_LIB_LOGGER: {
    message: "Activated Angotia SDK internal logger"
  },
  SILENT_CHECK_SSO_ADDRESS: {
    message: "Prepared silent check sso address"
  },
  IS_USER_LOGGED_IN: {
    message: "Check if user is logged in"
  },
  CREATING_ANGOTIA_USER: {
    message: "Creating Angotia user..."
  },
  CREATING_ANGOTIA_USER_ERROR: {
    message: "Creating Angotia user error",
    level: Log.error
  },
  FETCH_ANGOTIA_USER_ERROR: {
    message: "Creating Angotia user error",
    level: Log.warning
  },
  CREATED_ANGOTIA_USER: {
    message: "Created Angotia user"
  },
  FETCHING_ANGOTIA_USER: {
    message: "Fetching Angotia user..."
  },
  FETCHED_ANGOTIA_USER: {
    message: "Fetched Angotia user"
  },
  FORCE_FETCHING_ANGOTIA_USER: {
    message: "Force fetching Angotia user..."
  },
  FORCE_FETCHED_ANGOTIA_USER: {
    message: "Fetched Angotia user with force"
  },
  FORCE_FETCHING_ANGOTIA_USER_ERROR: {
    message: "Force fetching Angotia user end with failure",
    level: Log.fatal
  },
  FETCH_USER_CHARACTERS: {
    message: "Fetching user characters..."
  },
  FETCHED_USER_CHARACTERS: {
    message: "Fetched user characters"
  },
  FETCH_USER_CHARACTERS_ERR: {
    message: "An error occured during fetching user characters",
    level: Log.error
  },
  FETCH_CHARACTER_BY_NICK: {
    message: "Fetching character by nick..."
  },
  FETCHED_CHARACTER_BY_NICK: {
    message: "Fetched character by nick"
  },
  FETCH_CHARACTER_BY_NICK_ERR: {
    message: "An error occured during fetching character by nick",
    level: Log.error
  },
  CREATE_CHARACTER: {
    message: "Creating a new character..."
  },
  CREATED_CHARACTER: {
    message: "Created character"
  },
  CREATE_CHARACTER_ERR: {
    message: "An error occured during creating a new character",
    level: Log.warning
  }
};
