import { Component, OnInit } from '@angular/core';
import { Camera,CameraResultType,CameraSource,Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { async, base64 } from '@firebase/util';
import { AlertController, LoadingController, NavController, Platform } from '@ionic/angular';
  const IMAGE_DIR='stored-images';
  interface LocalFiels{
    name: string;
    path: string;
    data: string;
  };
@Component({
  selector: 'app-uploadedrecp',
  templateUrl: './uploadedrecp.page.html',
  styleUrls: ['./uploadedrecp.page.scss'],
})
export class UploadedrecpPage implements OnInit {
  img: LocalFiels[]=[];
  n: string;
  constructor(private platform: Platform, private loadingctrl: LoadingController, private alertCtrl: AlertController,
    public navCtrl: NavController,) {
      this.showPrompt();
    }

  async ngOnInit() {
    this.loadfiels();
  }
  async loadfiels(){
    this.img=[];
    const loading=await this.loadingctrl.create({
      message:'loading data....'
    });
   await loading.present();
   Filesystem.readdir({
     directory:Directory.Data,
     path:IMAGE_DIR
   }).then(res=>{
    this.loadfiledata(res.files);
   }, async err =>{
     console.log('error'+err);
     await Filesystem.mkdir({
      directory:Directory.Data,
      path:IMAGE_DIR
     });
   }).then(_=>{
    loading.dismiss();
  });

  }
  async loadfiledata(filename: string[]){
    for(const f of filename){
      const filepath=IMAGE_DIR+'/'+f;
      const readedfile=await Filesystem.readFile({
        directory:Directory.Data,
        path:filepath
      });
      this.img.push({
        name:f,
        path:filepath,
        data:'data:image/jpeg;base64,'+readedfile.data
      });
      console.log('read', readedfile);
    }
  }
  async selectimage(ss: string){
    const image=await Camera.getPhoto({
     quality:90,
     allowEditing:false,
     resultType:CameraResultType.Uri,
     source:CameraSource.Camera
    });
    if(image){
      this.saveimg(image,ss);
      this.loadfiels();
    }
  }
  async saveimg( photo: Photo ,namee: string){
    const base64Data=await this.readAsBase64(photo);
   //const filename=new Date().getTime()+'.jpeg';
   const filename=namee;
   const savedfile=await Filesystem.writeFile({
     directory:Directory.Data,
     path:IMAGE_DIR+'/'+filename,//
     data:base64Data
   });
  }
  async readAsBase64(photo: Photo) {
    // "hybrid" will detect Cordova or Capacitor
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: photo.path
      });
   return file.data;
    }
    else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath);
      const blob = await response.blob();
      return await this.convertBlobToBase64(blob) as string;
    }
  }
  convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
});
//////////delet
async deletimg( file: LocalFiels){
   await Filesystem.deleteFile({
     directory:Directory.Data,
     path:file.path
   });
   this.loadfiels();
}
/////////
  async  showPrompt()  {
  const prompt =  await this.alertCtrl.create({
    message: 'Enter A Name For  Recipe Image',
    inputs: [
      {
        name: 'Name',
        placeholder: 'Name of Recipe',
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        handler:  data => {
          console.log('Cancel clicked',data.name);
           this.selectimage(new Date().getTime()+'');
         // this.n=new Date().getTime()+'.jpeg';
        }
      },
      {
        text: 'Enter',
        handler:  data => {
          console.log('Saved clicked',data.Name);
          this.n=data.Name;
          this.selectimage(this.n);
        }
      }
    ]
  });
  prompt.present();
   prompt.onDidDismiss();

}
}
