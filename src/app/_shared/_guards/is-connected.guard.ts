import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {
  constructor(
  private router: Router
){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = localStorage.getItem('TOKEN');
      if(token == null)
      {
        this.router.navigateByUrl('/security/login');
        return false;
      }
      return true;
  }
}
