import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bar-code-scanner',
  templateUrl: './bar-code-scanner.page.html',
  styleUrls: ['./bar-code-scanner.page.scss'],
})
export class BarCodeScannerPage implements OnInit {
   result=null;
   scanactive=false;
  constructor(private alert: AlertController) { }

  ngOnInit() {
    this.startscanner();
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit(){
     BarcodeScanner.prepare();
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(){
    BarcodeScanner.stopScan();
  }
   async startscanner(){
    const allowed= await this.checkpermisson();
    if(allowed){
      this.scanactive=true;
      const result= await BarcodeScanner.startScan();
      console.log('result', result);
      if(result.hasContent){
        this.result=result.content;
        this.scanactive=false;
      }
    }

   }
   async checkpermisson(){
    return new Promise( async (resolve,reject)=>{
      const status=await BarcodeScanner.checkPermission({ force: true});
      if(status.granted){
        resolve(true);}
      else if(status.denied){
        const alet= await this.alert.create({
          header:'No Permission',
          message:'Please allow camera acess in your settings',
          buttons:[{
            text:'no',
            role:'cancel'
          },
          {
            text:'open settimgs',
            handler:()=>{
              BarcodeScanner.openAppSettings();
              resolve(false);
            }
          }
        ]
        });
       await alet.present();
      }
      else{
          resolve(false);
      }
    });
   }
   stopscannr(){
     BarcodeScanner.stopScan();
     this.scanactive=false;
   }
}
