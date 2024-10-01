import { AuthModel } from "./AuthModel";
import { UserAddressModel } from "./UserAddressModel";

export interface UserModel {
  id: number;
  uuid:string;
  username: string;
  password: string | undefined;
  email: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  auth?: AuthModel;
  address?: UserAddressModel;
  role?:string;
  userId?:string;
}
