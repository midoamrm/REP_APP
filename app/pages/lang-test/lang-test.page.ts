import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LangPopoverPage } from '../lang-popover/lang-popover.page';

@Component({
  selector: 'app-lang-test',
  templateUrl: './lang-test.page.html',
  styleUrls: ['./lang-test.page.scss'],
})
export class LangTestPage implements OnInit {

  constructor(private popctrl: PopoverController) { }

  ngOnInit() {
  }
  async opnelangpopover(ev){
   const pop=await this.popctrl.create({
     component:LangPopoverPage,
     event:ev
   });
   await pop.present();
  }
}
