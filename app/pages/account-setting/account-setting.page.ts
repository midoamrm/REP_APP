import { Component, OnInit } from '@angular/core';
import { snapshotChanges } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { AutservService } from 'src/app/services/autserv.service';
import { User } from '../usermodel';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.page.html',
  styleUrls: ['./account-setting.page.scss'],
})
export class AccountSettingPage implements OnInit {
  userdata: User=new User();
  c=0;
  constructor( private rt: Router,private authser: AutservService) { }

  ngOnInit() {
  }
  sub(form){
    this.userdata.email=form.value.newemail;
    this.userdata.password=form.value.newpassword;
    this.authser.getuesrs().valueChanges().subscribe(pk=>{
     // eslint-disable-next-line @typescript-eslint/prefer-for-of
     for(let k=0;k<pk.length;k++){
      if(pk[k].email===form.value.email && pk[k].password===form.value.password){
        console.log('VERFIED');
        this.c++;
         //delet
         this.authser.getuesrs().snapshotChanges().subscribe(pp=>{
           console.log(pp[k].key);
          if(this.c===1){
            this.authser.userlist.remove(pp[k].key);
            this.authser.createuser(this.userdata).then(res=>
              {
                 console.log(res);
              }).catch(err=> console.log(err));
              this.c=0;
          }
         });
         //delet
         break;
      }
     }
    });
       //this.rt.navigateByUrl('/search');

  }

  gohome(){
    this.rt.navigateByUrl('/search');
  }
  gopass(){
    this.rt.navigateByUrl('/change-password');
  }
}
