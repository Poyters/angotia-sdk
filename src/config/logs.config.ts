import { Log } from "../models/log.model";

export const logsConfig = {
  UNKNOWN_LOG: {
    message: "Unknown log",
    level: Log.warning
  },
  ACTIVED_LIB_LOGGER: {
    message: "Activated RentSofa SDK internal logger"
  },
  CALCULATE_PERCENTAGE_DISCOUNT: {
    message: "Calculate offer percentage discount"
  },
  CREATING_RENTSOFA_USER: {
    message: "Creating rentsofa user..."
  },
  CREATING_RENTSOFA_USER_ERROR: {
    message: "Creating rentsofa user error",
    level: Log.fatal
  },
  CREATING_RENTSOFA_USER_RES: {
    message: "Creating rentsofa user response"
  },
  FETCHING_RENTSOFA_USER: {
    message: "Fetching rentsofa user..."
  },
  FETCHED_RENTSOFA_USER: {
    message: "Fetched rentsofa user"
  },
  FETCH_RENTSOFA_USER_ERR: {
    message: "An error occured during fetching rentsofa user"
  },
  UPDATE_USER_PROFILE_ERR: {
    message: "An error occured during updating rentsofa user"
  },
  GET_USER_IDS_ERR: {
    message: "An error occured during fetching all users ids"
  },
  FETCH_RENTSOFA_PUBLIC_USER_ERR: {
    message: "An error occured during fetching rentsofa user public data"
  },
  GET_OFFER_IDS_ERR: {
    message: "An error occured during fetching all offers ids"
  },
  FETCH_OFFER_SUMMARY_BY_ID_ERR: {
    message: "An error occured during fetching offer summary by id"
  },
  FETCH_OFFER_BY_ID_ERR: {
    message: "An error occured during fetching offer by id"
  },
  FETCH_OFFER_SUMMARIES_ERR: {
    message: "An error occured during fetching all offer summaries"
  },
  FORCE_FETCHING_RENTSOFA_USER: {
    message: "Force fetching rentsofa user..."
  },
  FORCE_FETCHED_RENTSOFA_USER: {
    message: "Fetched rentsofa user with force"
  },
  FORCE_FETCHING_RENTSOFA_USER_ERROR: {
    message: "Force fetching rentsofa user end with failure",
    level: Log.fatal
  },
  SILENT_CHECK_SSO_ADDRESS: {
    message: "Prepared silent check sso address"
  },
  IS_USER_LOGGED_IN: {
    message: "Check if user is logged in"
  },
  FETCHING_ACCOUNT_TYPE: {
    message: "Fetching account type"
  },
  FETCHED_ACCOUNT_TYPE: {
    message: "Fetched account type"
  },
  UPDATING_USER_PROFILE: {
    message: "Updating user profile..."
  },
  UPDATED_USER_PROFILE: {
    message: "Updated user profile"
  },
  LOGIN_REDIRECT: {
    message: "Redirecting to login SSO page..."
  },
  REGISTER_REDIRECT: {
    message: "Redirecting to register SSO page..."
  },
  FETCHING_USER_PUBLIC_DATA: {
    message: "Fetching user public data..."
  },
  FETCHED_USER_PUBLIC_DATA: {
    message: "Fetched user public data"
  },
  FETCHING_ALL_USERS_IDS: {
    message: "Fetching all users ids..."
  },
  FETCHED_ALL_USERS_IDS: {
    message: "Fetched all users ids"
  },
  CREATING_OFFER: {
    message: "Creating offer..."
  },
  CREATING_OFFER_ERROR: {
    message: "Creating offer error",
    level: Log.error
  },
  CREATING_OFFER_RES: {
    message: "Creating offer response"
  },
  FETCHING_ALL_OFFERS_IDS: {
    message: "Fetching all offers ids..."
  },
  FETCHED_ALL_OFFERS_IDS: {
    message: "Fetched all offers ids"
  },
  FETCHING_OFFER_BY_ID: {
    message: "Fetching offer by id..."
  },
  FETCHED_OFFER_BY_ID: {
    message: "Fetched offer by id"
  },
  FETCHING_ALL_SUMMARIES: {
    message: "Fetching all offer summaries..."
  },
  FETCHED_ALL_SUMMARIES: {
    message: "Fetched all offer summaries"
  },
  FETCHING_SUMMARY_BY_ID: {
    message: "Fetching offer summary by id..."
  },
  FETCHED_SUMMARY_BY_ID: {
    message: "Fetched offer summary by id"
  },
  EDITING_OFFER: {
    message: "Editing offer..."
  },
  FINISH_EDIT_OFFER: {
    message: "Finished editing offer"
  },
  EDITING_OFFER_ERROR: {
    message: "Editing offer error",
    level: Log.fatal
  }
};
