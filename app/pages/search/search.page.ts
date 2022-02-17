import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar, IonToolbar } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Recpie } from 'src/app/recpiemodel';
import { ApiservService } from 'src/app/services/apiserv.service';
import { DataservService } from 'src/app/services/dataserv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('search',{static: false}) search: IonSearchbar;

  ////////get the whole element from dome
  // varibles
  public list: Array<object> =[] ;
  public searchitem: any;
  public searchitemim: any;
  public validd: string;
  public data: any;
  public newdata: any;
  public link: string;
  public urll: string;
  results: Observable<any>;
  rep: Recpie;
  repa: Array<any>;
  count: number;
  ////////////
  constructor(private router: Router, private dataser: DataservService,private httpserv: ApiservService) {
  ///define search varible
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
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'mushrooms',
  id:12
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'onion',
  id:13
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'potato',
  id:14
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'pumpkin',
  id:15
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'red pepper',
  id:16
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'tomato',
  id:17
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'beetroot',
  id:18
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'brussel sprouts',
  id:19
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'peas',
  id:20
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'zucchini',
  id:21
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'radish',
  id:22
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'sweet potato',
  id:23
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'artichoke',
  id:24
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'leek',
  id:25
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'cabbage',
  id:26
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'celery',
  id:27
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'chili',
  id:28
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'coriander',
  id:29
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'garlic',
  id:30
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'basil',
  id:31
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'basil',
  id:32
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'parsley',
  id:33
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'dill',
  id:34
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'rosemary',
  id:35
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'oregano',
  id:36
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'cinnamon',
  id:37
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'saffron',
  id:38
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'green bean',
  id:39
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'bean',
  id:40
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'chickpea',
  id:41
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'lentil',
  id:42
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'apple',
  id:43
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'apricot',
  id:44
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'avocado',
  id:45
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'banana',
  id:46
}
,{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'blueberry',
  id:47
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'boysenberry',
  id:48
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'cherry',
  id:49
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'coconut',
  id:50
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'fig',
  id:51
},{
  im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU',
  name:'grape',
  id:52
}
];

//////////////end


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
  // v.i.p function
  go(event){
    const val=event;
    const id=val.id;
    const namee=val.name;
    this.urll='https://forkify-api.herokuapp.com/api/search?q='+namee;
    ///api function
    this.repa=new Array<any>();
    this.httpserv.doGet(this.urll).then(
       async res=>{
         this.results=res.data.recipes;
         this.count=res.data.count;
         console.log(this.count);
      for(let i=0;i<this.count;i++){
        this.rep=new Recpie();
        this.rep.publisher=this.results[i].publisher;
        this.rep.title=this.results[i].title;
        this.rep.imageurl=this.results[i].image_url;
        this.rep.repid=this.results[i].recipe_id;
        this.repa[i]=this.rep;
      }

      });
  this.dataser.setdata(id,this.repa);
   this.router.navigateByUrl('/recpie-mnue/'+id);
  }
  gosett(){
    this.router.navigateByUrl('/account-setting');
  }
  govideos(){
    this.router.navigateByUrl('/repiesvideos');
  }
}
