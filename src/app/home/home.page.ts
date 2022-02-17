import { Component } from '@angular/core';
import { ApiservService } from '../services/apiserv.service';
import { DataModel } from '../data.model';
import { Recpie } from '../recpiemodel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  data: object;
  results: Observable<any>;
   datam: DataModel= new DataModel();
   rep: Recpie;
   repa: Array<any>=new Array<any>();
  count: number;

  constructor(private httpserv: ApiservService) {
  }

   gett(){
     this.httpserv.doGet('https://forkify-api.herokuapp.com/api/search?q=pizza').then(
       async res=>{
        /* this.datam.imagerl=res.data.recipe.image_url;
         this.datam.ingredients=res.data.recipe.ingredients;
         this.datam.sourceurl=res.data.recipe.source_url;
         this.datam.publisher=res.data.recipe.publisher;
         this.datam.title=res.data.recipe.title;
        console.log(this.datam.imagerl);
        console.log(this.datam.ingredients);*/
         this.results=res.data.recipes;
         this.count=res.data.count;
         ///console.log(res.data.recipes);
         console.log(res.data.count);
      for(let i=0;i<this.count;i++){
        this.rep=new Recpie();
        this.rep.publisher=this.results[i].publisher;
        this.rep.title=this.results[i].title;
        this.rep.imageurl=this.results[i].image_url;
        this.rep.repid=this.results[i].recipe_id;
        this.repa[i]=this.rep;
      }
      for(let j=0;j<this.count;j++){
       console.log(this.repa[j].title);

      }

      });

    }
  }
