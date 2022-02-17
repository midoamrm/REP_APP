import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepdataService {

 private datadet=[];

  constructor() {
  }

  setdata(id,data){
    this.datadet[id]=data;
  }
  getdata(id){
    return this.datadet[id];
  }
}
