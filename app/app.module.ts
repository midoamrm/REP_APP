import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage-angular';;
import { LangPopoverPageModule } from './pages/lang-popover/lang-popover.module';
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function createTranslateloader( http: HttpClient){
  return new TranslateHttpLoader(http,'assets/i18n/','.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireModule.initializeApp(environment.firebaseConfig),BrowserModule, IonicModule.forRoot(),
    AngularFireAuthModule, AngularFireDatabaseModule,AngularFireStorageModule, AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader:{
       provide:TranslateLoader,
       useFactory:(createTranslateloader),
       deps:[HttpClient]
      }
    }),
    LangPopoverPageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },PreviewAnyFile],
  bootstrap: [AppComponent],
})
export class AppModule {}
