import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private session: SessionService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.isPageRefresh()){
        if (this.session.getToken()) {
          return true;
        }
      }

      if (this.session.getToken()) {
        return true;
      }
      
      this.router.navigate(['/login', { queryParams: { returnUrl: state.url } }])
      return false;
  }
  
  private isPageRefresh() : boolean {
    return( ! this.router.navigated );
  }
}