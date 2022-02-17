import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { ApiservService } from 'src/app/services/apiserv.service';
import { DataservService } from 'src/app/services/dataserv.service';
import { RepdataService } from 'src/app/services/repdata.service';

@Component({
  selector: 'app-repiesvideos',
  templateUrl: './repiesvideos.page.html',
  styleUrls: ['./repiesvideos.page.scss'],
})
export class RepiesvideosPage implements OnInit {
  @ViewChild('search',{static: false}) search: IonSearchbar;
  public list: Array<object> =[] ;
  public searchitem: any;
  public searchitemim: any;
  public validd: string;
  constructor(private router: Router, private dataser: RepdataService)  {
    this.list=[{
      im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB13rH49sCBXGkb0HR4HOcQE5nCiIYLjYmqw&usqp=CAU',
      name:'blackberry',
      id:1
    },
    {
     im:'https://zanaromi.com/72-large_default/flavour-black-currant-1400.jpg',
     name:'blackcurrant',
     id:2
   },{
     im:'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg',
     name:'pizza',
     id:3
   },{
     im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_huO9Nk51StCkG_zYQLyqXZ2g2Oa7H9Bp7A&usqp=CAU',
     name:'carrot',
     id:4
   },{
     im:'https://thumb.photo-ac.com/a0/a0b5114a8477d777a43668e1102c679a_t.jpeg',
     name:'broccoli',
     id:5
   },{
     im:'https://www.mykitchenlove.com/wp-content/uploads/2021/05/Potato-and-Asparagus-ft-image.jpg',
     name:'asparagus',
     id:6
   },{
     im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhBzdWa0uGfRPnbpLQ057q6WKg9Duwy5iRQ&usqp=CAU',
     name:'cauliflower',
     id:7,
   }
  ,{
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtau9RSvP5lANd4rCf7GXjswsA2Xi6AqRugA&usqp=CAU',
    name:'ribs',
    id:8
  },{
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
    name:'cucumber',
    id:9
  },{
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
    name:'green pepper',
    id:10
  }
  ,{
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
    name:'lettuce',
    id:11
  }];
  }

  ngOnInit() {
    this.searchitemim=this.list; // const data for image veiw
  }
  ionViewDidEnter(){ // set on foucs when ope page
    setTimeout(()=>{
     this.search.setFocus();
    });
  }
  onachange(event){
    const val=event.target.value;
    this.validd=event.target.value; //  validation on value
    this.searchitem=this.list;  // searchitem for list changeable
    if(this.validd){
      document.getElementById('tb').style.height ='1180px';
    }else{
      document.getElementById('tb').style.height ='70px';
    }
    if(val && val.trim()!==''){

      this.searchitem=this.searchitem.filter((item: any )=>(item.name.toLowerCase().indexOf(val.toLowerCase())>-1));

    }


  }
  go(it){
    const val=it;
    const id=val.id;
    const namee=val.name;
    this.dataser.setdata(id,namee);
     console.log(this.dataser.getdata(id));
   this.router.navigateByUrl('/recpies-videos/'+id);
  }
  gohome(){
    this.router.navigateByUrl('/search');
 }
}
