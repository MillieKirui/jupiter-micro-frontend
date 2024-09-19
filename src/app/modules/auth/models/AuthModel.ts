export interface AuthModel {
  token: string;
  uuid:string;
  role:string;
  refreshToken?: string;
}
