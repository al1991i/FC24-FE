import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token')
    if (token && localStorage.getItem('isLoggedIn')) {
      const decodedToken = jwtDecode(token);
      const expDate = decodedToken.exp
      const isExpDate = new Date(expDate!) < new Date(new Date().toDateString());
      if(isExpDate) {
        localStorage.setItem('user', decodedToken.sub + '');
      }
      return isExpDate
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

}
