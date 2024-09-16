import { AuthModel } from "./AuthModel";
import { UserAddressModel } from "./UserAddressModel";

export interface UserModel {
  id: number;
  username: string;
  password: string | undefined;
  email: string;
  firstName: string;
  lastName: string;
  fullname?: string;
  auth?: AuthModel;
  address?: UserAddressModel;
}
