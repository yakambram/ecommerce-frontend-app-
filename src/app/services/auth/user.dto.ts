export default class UserDTO {
    username : string;
    email : string;
    password : string;
    appUserRoles : string[];
}

export enum AppUserRole {
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_CLIENT = 'ROLE_CLIENT',
    ROLE_CUSTOMER = "ROLE_CUSTOMER",
    ROLE_AGENT="ROLE_AGENT"
  }
  

  export class AuthenticationRequest {
    username :string;
    password :string;
  }