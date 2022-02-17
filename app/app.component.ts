import { Component } from '@angular/core';
import { Router } from '@angular/router';;
import { MenuController, Platform } from '@ionic/angular';
import { LangServService } from './lang-serv.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor( private rt: Router,private menu: MenuController,
    private platform: Platform, private langserv: LangServService,
    ) {
      this.intapp();
  }
  lo(){
    this.menu.close('mn');
    this.rt.navigateByUrl('/login');
  }
  add(){
    this.menu.close('mn');
    this.rt.navigateByUrl('/uploadedrecp');
  }
  gotobar(){
    this.menu.close('mn');
    this.rt.navigateByUrl('/bar-code-scanner');
  }
  gotsetting(){
    this.menu.close('mn');
    this.rt.navigateByUrl('/account-setting');
  }
  intapp(){
    this.platform.ready().then(()=>{
      this.langserv.setintapplang();
    });
  }
  goupload(){
    this.menu.close('mn');
    this.rt.navigateByUrl('/show-files');
  }
  golang(){
    this.menu.close('mn');
    this.rt.navigateByUrl('/lang-test');
  }
}
