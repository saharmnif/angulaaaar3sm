import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './service/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private A:AuthentificationService, private router:Router){}
  canActivate() {
    if (this.A.role=="admin")
    return true;
    else {
      this.router.navigate(['/authentifier'])
     return false;
    }

  }
  
}
