
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserStorageService } from '../storage/user-storage.service';
// Adjust the import path

type CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => boolean;

export const customerAuthGuard: CanActivateFn = (route, state) => {
  return UserStorageService.isCustomerLoggedIn();
};

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuard implements CanActivate {
  canActivate = customerAuthGuard;
}