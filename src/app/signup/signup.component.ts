import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { AppUserRole } from '../services/auth/user.dto';
import { tap } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  appUserRoles: AppUserRole[] = Object.values(AppUserRole);
  signupForm: FormGroup = this.formBuilder.group({});
  hidePassword = true;
  constructor(private formBuilder: FormBuilder,
              private snackBar:MatSnackBar,
              private authService: AuthService,
              private router:Router) {
              }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
     username:[null, [Validators.required]],
     email:[null, [Validators.required, Validators.email]],
     password:[null, [Validators.required]],
     confirmPassword:[null, [Validators.required]],
     appUserRoles:[null, [Validators.required]],
    });
  }

  togglePasswordVisibility(){
    this.hidePassword= !this.hidePassword;
  }

  onSubmit():void {
    const password =  this.signupForm.get('password')?.value;
    const confirmPassword =  this.signupForm.get('confirmPassword')?.value;
    if(password!==confirmPassword){
      this.snackBar.open('Password do not match', 'Close', {duration:5000, panelClass:'error-snackbar'});
      return;
    }
    this.authService.register(this.signupForm.value)
    .pipe(
      tap(
        () => {
          this.snackBar.open('Sign up successful', 'ok', { duration: 5000 });
          this.router.navigateByUrl('/login');
        },
        (error) => {
           this.snackBar.open('Sign up failed', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
          console.error('Sign up failed:', error);
         
        }
      )
    )
    .subscribe();
  }




}


