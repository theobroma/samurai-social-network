export type SagaAction<T> = {
  type: string;
  payload: T;
};
