import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
const LNG_KEY='SELECTED_LANG';
@Injectable({
  providedIn: 'root'
})
export class LangServService {
     selet='';
  constructor(private trnslate: TranslateService, private storage: Storage) { }
  setintapplang(){
    this.trnslate.setDefaultLang(this.trnslate.getBrowserLang());
    this.storage.create();
    this.storage.get(LNG_KEY).then(val =>{
      if(val){
        this.setlang(val);
        this.selet=val;
      }
    });

  }
  setlang(lng){
    this.trnslate.use(lng);
    this.selet=lng;
    this.storage.set(LNG_KEY,lng);
  }
  getlng(){
    return[
      {text: 'English',val:'en'},
      {text: 'عربي ',val:'de'}
    ];
  }
}
