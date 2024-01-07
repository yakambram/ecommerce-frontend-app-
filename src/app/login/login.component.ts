import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { map, tap } from 'rxjs';
import { UserStorageService } from '../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup;
  hidePassword = true;
  constructor(private formBuilder: FormBuilder,
              private snackBar:MatSnackBar,
              private authService:AuthService,
              private userStorageService: UserStorageService,
              private router:Router) {
              }

  ngOnInit(): void {
     UserStorageService.signOut();
    this.loginForm = this.formBuilder.group({
     username:[null, [Validators.required]],
     password:[null, [Validators.required]],
    });
  }

  togglePasswordVisibility(){
    this.hidePassword= !this.hidePassword;
  }

  onSubmit():void {
    const username = this.loginForm.get('username')!.value;
    const password = this.loginForm.get('password')!.value;
    this.authService.login(username, password).subscribe(
        (response) => {
            const user = response.body;
            if (user) {
              this.userStorageService.saveToken(user.token);
              this.userStorageService.saveUser(user);
              if(UserStorageService.isAdminLoggedIn()){
                this.router.navigateByUrl('admin/dashboard');
              }else if(UserStorageService.isCustomerLoggedIn()){
                this.router.navigateByUrl('customer/dashboard');
              }
            }
         
         return false;
        },
        (error) => {
          this.snackBar.open('Failed to login, retry ', 'Close', { duration: 5000 });
        }
      );
  }
    
}