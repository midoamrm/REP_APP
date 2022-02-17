import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { AlertController,isPlatform, Platform, ToastController } from '@ionic/angular';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { ActivatedRoute, Router } from '@angular/router';

 const  APP_DIRECTORY=Directory.Documents;
@Component({
  selector: 'app-show-files',
  templateUrl: './show-files.page.html',
  styleUrls: ['./show-files.page.scss'],
})
export class ShowFilesPage implements OnInit {
  foldercontent=[];
  currentfolder='';
  copyfiel=null;
   nm: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('filepicker') uploader: ElementRef;

  constructor(private route: ActivatedRoute,private alertCtrl: AlertController,private prevfile: PreviewAnyFile
    , private toastctrl: ToastController, private router: Router,private platform: Platform) { }

  ngOnInit() {
    this.nm='lol';
    this.loaddoc();
  }
   async loaddoc(){
     const foldercontent=await Filesystem.readdir({
       directory:APP_DIRECTORY,
       path:this.currentfolder
     });
     console.log(foldercontent);
    // eslint-disable-next-line arrow-body-style
    this.foldercontent=foldercontent.files.map( file=>{
        return {
        name:file,
        isfile:file.includes('.')
      };
      });
   }
   async createfolder(){
    const prompt =  await this.alertCtrl.create({
      header:'create folder',
      message: 'Enter A Name For  the folder',
      inputs: [
        {
          name: 'name',
          type:'text',
          placeholder: 'My-Dir',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role:'cancel'
        },
        {
          text: 'Enter',
          handler: async data => {
            this.nm=data.name;
            console.log(this.nm);
           await Filesystem.mkdir({
             directory:APP_DIRECTORY,
             path:this.currentfolder+'/'+this.nm
           });
           this.loaddoc();
          }
        }
      ]
    });
    prompt.present();
    prompt.onDidDismiss();}
    addfile(){
      this.uploader.nativeElement.click();
    }
      async filesele($event){
      const selected2=  $event.target.files[0];
      const selected= $event.target.files[0];
      const base64=await this.convertBlobToBase64(selected) as string;
      console.log('here',selected.name);
      console.log(base64);
      await Filesystem.writeFile({
        path:this.currentfolder+'/'+selected.name,
        data:base64,
        directory: APP_DIRECTORY
      });
      this.loaddoc();
    }
    async open(){
      if (isPlatform('hybrid')) {
        // Get the URI and use our Cordova plugin for preview
        const fileuri = await Filesystem.getUri({
          directory: APP_DIRECTORY,
          path: this.currentfolder + '/' + 'bitbucket password.txt'
        });
        this.prevfile.preview(fileuri.uri)
          .then((res: any) => console.log(res))
          .catch((error: any) => console.error(error));
      } else {
        // Browser fallback to download the file
        const file = await Filesystem.readFile({
          directory: APP_DIRECTORY,
          path: this.currentfolder + '/' + 'dummy.pdf'
        });
        const blob = this.b64toBlob(file.data, '');
        console.log(file.data);
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = blobUrl;
        a.download = 'dummy.pdf';
        a.click();
        window.URL.revokeObjectURL(blobUrl);
        a.remove();
      }
    }
    b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
      const byteCharacters = atob(b64Data);
      const byteArrays = [];
   for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
     const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      const blob = new Blob(byteArrays, { type: contentType });
      return blob;
    };
    private convertBlobToBase64=(blob: Blob)=> new Promise((_resolve,reject)=>{
      const reader=new FileReader();
      reader.onerror=reject;
      reader.onload=()=>{
        _resolve(reader.result);
      };
     reader.readAsText(blob);
    });
}
