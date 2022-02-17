import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataservService } from './dataserv.service';
import { RepdataService } from './repdata.service';

@Injectable({
  providedIn: 'root'
})
export class RepdataresolverService {
  constructor(private dataserv: RepdataService ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id=route.paramMap.get('iddd');
    console.log('out',this.dataserv.getdata(id));
    return this.dataserv.getdata(id);
  }
}
