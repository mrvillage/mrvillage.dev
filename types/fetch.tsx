export type QueryResponse<T> = Promise<{
  data: T;
  status: number;
  error?: string;
}>;

export type AllOptional<T> = {
  [P in keyof T]?: T[P];
};
