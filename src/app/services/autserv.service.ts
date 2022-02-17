import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireObject,AngularFireList} from '@angular/fire/compat/database';
import { User } from '../pages/usermodel';

@Injectable({
  providedIn: 'root'
})
export class AutservService {
  userlist: AngularFireList<any>;
  user: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {
    this.userlist=db.list('/user');
   }
   createuser(emp: User){
    return this.userlist.push(
      { email: emp.email,
        password: emp.password
      }
    );
    }
    getuesrs(){
      return this.userlist=this.db.list('/user');
    }
    getall(){
      return this.db.list('/user');
    }
}
