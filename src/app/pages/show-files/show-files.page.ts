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
      console.log('here',selected);
      this.loaddoc();
    }

}
