import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadindGuardGuard implements CanLoad {
 canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
   console.log('check load guard');
   return false;
 }

}

