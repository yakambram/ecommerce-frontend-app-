export default class UserDTO {
    username : string;
    name : string;
    email : string;
    password : string;
    appUserRoles : string[];
}

export enum AppUserRole {
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_CUSTOMER = "ROLE_CUSTOMER",
    ROLE_AGENT="ROLE_AGENT",
    ROLE_CLIENT = 'ROLE_CLIENT'
  }
  

  export class AuthenticationRequest {
    username :string;
    password :string;
  }