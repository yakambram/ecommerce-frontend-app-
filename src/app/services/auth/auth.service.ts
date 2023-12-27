import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UserDTO, { AppUserRole } from './user.dto';

const BASIC_URL ="http://localhost:9090/users/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }

  register(signupForm: any): Observable<any> {
    let appUserRoles: AppUserRole[] = [signupForm.appUserRoles];
    let userDataDTO: UserDTO = {
      username: signupForm.username,
      email: signupForm.email,
      password: signupForm.password,
      appUserRoles: appUserRoles
    };
    return this.http.post(BASIC_URL + "signup", userDataDTO);
  }
  login(username: any, password: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('username', username).set('password', password);
    return this.http.post(BASIC_URL + 'signin', null, { headers, params, observe: 'response' });
  }
  

}

