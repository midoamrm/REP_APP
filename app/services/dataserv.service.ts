import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataservService {

  private data=[];

  constructor() {
  }

  setdata(id,data){
    this.data[id]=data;
  }
  getdata(id){
    return this.data[id];
  }
}
