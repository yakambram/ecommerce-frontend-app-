export default class UserDTO {
    username : string;
    email : string;
    password : string;
    appUserRoles : string[];
}

export enum AppUserRole {
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_CLIENT = 'ROLE_CLIENT',
  }
  

  export class AuthenticationRequest {
    username :string;
    password :string;
  }