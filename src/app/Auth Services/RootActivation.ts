import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {st} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class RootActivationService implements CanActivate{

  constructor(private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(state.url === '/dashboard')
    {
      this.route.navigate(['']);  // prevent access parent component alone without child
      return false;
    }
    if(state.url === '/signup')
    {
      this.route.navigate(['/signup/author']);  // make default child route /author for parent route /signup
      return false;
    }

      //this.route.navigate(['/signup/author']);
    return true;
  }
}
