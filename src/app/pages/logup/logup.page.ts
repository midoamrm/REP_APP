import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutservService } from 'src/app/services/autserv.service';
import { User } from '../usermodel';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.page.html',
  styleUrls: ['./logup.page.scss'],
})
export class LogupPage implements OnInit {
  userdata: User=new User();
  constructor( private  router:  Router,private authser: AutservService) { }

  ngOnInit() {
  }
  register(form){
    console.log(form.value.email);
    console.log(form.value.password);
    this.userdata.email=form.value.email;
    this.userdata.password=form.value.password;
    console.log(this.userdata);
    this.authser.createuser(this.userdata).then(res=>
      {
         console.log(res);
      }).catch(err=> console.log(err));
  this.router.navigateByUrl('/login');
  }
}
