import { Injectable } from '@angular/core';
import { Http,HttpOptions } from '@capacitor-community/http';
import{from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservService {

  constructor() { }
 async doGet(url){

const options: HttpOptions={
  url
};
return await Http.get(options);
}

}
