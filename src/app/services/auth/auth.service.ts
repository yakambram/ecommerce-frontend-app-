import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import UserDTO, { AppUserRole, AuthenticationRequest } from './user.dto';
import { UserStorageService } from '../storage/user-storage.service';

const BASIC_URL ="http://localhost:9090/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient,
    private userStorageService:UserStorageService) { }

  register(signupForm: any): Observable<any> {
    let appUserRoles: AppUserRole[] = [signupForm.appUserRoles];
    let userDataDTO: UserDTO = {
      name: signupForm.name,
      username: signupForm.username,
      email: signupForm.username,
      password: signupForm.password,
      appUserRoles: appUserRoles
    };
    return this.http.post(BASIC_URL + "sign-up", userDataDTO);
  }




  login(username: any, password: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const authenticationRequest: AuthenticationRequest = { username, password };
    return this.http.post(BASIC_URL + 'authenticate', authenticationRequest, { headers, observe: 'response' });
  }
  

}

