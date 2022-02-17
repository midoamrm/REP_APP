import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LangServService } from 'src/app/lang-serv.service';

@Component({
  selector: 'app-lang-popover',
  templateUrl: './lang-popover.page.html',
  styleUrls: ['./lang-popover.page.scss'],
})
export class LangPopoverPage implements OnInit {
  languages=[];
  select='';
  constructor(private popctrl: PopoverController, private langserv: LangServService) { }

  ngOnInit() {
    this.languages=this.langserv.getlng();
    this.select=this.langserv.selet;
  }
  selectlng(lng){
    this.langserv.setlang(lng);
    this.popctrl.dismiss();
  }
}
