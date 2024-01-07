import { Component } from '@angular/core';
import { UserStorageService } from './services/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-app';

  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
  isAgentLoggedIn = UserStorageService.isAgentLoggedIn();
  isClientLoggedIn = UserStorageService.isClientLoggedIn();


  constructor(private router: Router){}

  ngOnInit():void {
    this.router.events.subscribe(event => {
      this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      this.isAgentLoggedIn = UserStorageService.isAgentLoggedIn();
      this.isClientLoggedIn = UserStorageService.isClientLoggedIn();
    })
  }

  logOut(){
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
