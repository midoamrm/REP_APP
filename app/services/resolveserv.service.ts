import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataservService } from './dataserv.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveservService {
  constructor(private dataserv: DataservService ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id=route.paramMap.get('id');
    return this.dataserv.getdata(id);
  }
}
