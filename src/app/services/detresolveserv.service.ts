import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DetdataservService } from './detdataserv.service';

@Injectable({
  providedIn: 'root'
})
export class DetresolveservService {

  constructor(private dataserv: DetdataservService ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id=route.paramMap.get('idd');
    return this.dataserv.getdata(id);
  }
}
