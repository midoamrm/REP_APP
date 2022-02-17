import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
interface OB{
  email: string;
  data: string;
};
@Component({
  selector: 'app-recpies-videos',
  templateUrl: './recpies-videos.page.html',
  styleUrls: ['./recpies-videos.page.scss'],
})
export class RecpiesVideosPage implements OnInit {
   namem: string;
   data: any;
   llike: number;
   lke: string;
   cont: number;
   dllike: number;
   dlke: string;
   dcont: number;
   space: string;
   cocount: number;
   comoarr: OB[];
   comoname: string[];
  constructor(private route: ActivatedRoute,private alert: AlertController) {
    this.cont=0;
    this.llike=0;
    this.dcont=0;
    this.dllike=0;
    this.cocount=0;
    this.space='eeeeeeeeeee';
    this.comoarr=[];
    this.comoname=[];
  }

  ngOnInit() {
    this.namem=this.route.snapshot.data.special;

  }
  like(){
  this.cont++;
  if(this.cont%2!==0){ this.llike++;
    console.log(this.llike);
    this.lke=this.llike+'';
  }else{
    this.llike--;
    console.log(this.llike);
    this.lke=this.llike+'';
  }
  }
  dislike(){
    this.dcont++;
    if(this.dcont%2!==0){ this.dllike++;
      this.dlke=this.dllike+'';
    }else{
      this.dllike--;
      this.dlke=this.dllike+'';
    }
    }
   async como(){
      const alet= await this.alert.create({
        header:'Add Comment',
        message:'Please Enter your comment',
        inputs: [
          {
            name: 'Name',
            placeholder: 'Your Email',
          },
          {
            name: 'co',
            placeholder: 'Your comment',
          }
        ],
        buttons:[{
          text:'no',
          role:'cancel'
        },
        {
          text:' Add',
          handler:data=>{
          this.comoarr.push({
            email:data.Name,
            data:data.co
          });
          }
        }
      ]
      });
     await alet.present();
    }
}
