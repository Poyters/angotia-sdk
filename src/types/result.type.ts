export type Result<Type> = [Error | null, Type | null];

export type Error = {
  statusCode: number;
  message: string;
};
