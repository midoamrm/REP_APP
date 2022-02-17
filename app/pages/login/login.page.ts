import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutservService } from 'src/app/services/autserv.service';
import { User } from '../usermodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   datafir: Array<any>=new Array<any>();
   dataobje: User;
  constructor(private authser: AutservService,  private rout: Router) { }

  ngOnInit() {
  }
  loginn(form){
    this.authser.getuesrs().valueChanges().subscribe(p=>{
     // eslint-disable-next-line @typescript-eslint/prefer-for-of
     for(let j=0;j<p.length;j++){
      console.log( p[j].email);
      if(p[j].email===form.value.email && p[j].password===form.value.password){
        console.log('VERFIED');
         this.rout.navigateByUrl('/search');
      }
     }
    });
   }
}
