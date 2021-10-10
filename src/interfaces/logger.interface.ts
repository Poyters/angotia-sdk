export interface LogConfig {
  [key: string]: {
    message: string;
    level?: string;
  };
}
