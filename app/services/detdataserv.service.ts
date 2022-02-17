import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetdataservService {
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
