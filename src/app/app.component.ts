import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor( private rt: Router,private menu: MenuController) {
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
}
