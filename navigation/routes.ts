export enum Routes {
  ROOT = "Root",
  AUTH = "Auth",
  LOGIN = "Login",
}

export interface RootStackParamList {
  [key: string]: { id: number } | undefined;
}
