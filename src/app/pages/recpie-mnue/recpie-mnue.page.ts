import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataModel } from 'src/app/data.model';
import { ApiservService } from 'src/app/services/apiserv.service';
import { DetdataservService } from 'src/app/services/detdataserv.service';

@Component({
  selector: 'app-recpie-mnue',
  templateUrl: './recpie-mnue.page.html',
  styleUrls: ['./recpie-mnue.page.scss'],
})
export class RecpieMnuePage implements OnInit {
  data: any ;
  urll: string;
  datam: DataModel= new DataModel();
  cont: number;
  constructor(private router: Router,private route: ActivatedRoute,private httpserv: ApiservService,
    private dataserv: DetdataservService) {
      this.cont=0;
    }

  ngOnInit() {
    this.data=this.route.snapshot.data.special;
  }
 godet(idd){
  this.urll='https://forkify-api.herokuapp.com/api/get?rId='+idd;
  this.httpserv.doGet(this.urll).then(
       async res=>{
         this.datam.imagerl=res.data.recipe.image_url;
         this.datam.ingredients=res.data.recipe.ingredients;
         this.datam.sourceurl=res.data.recipe.source_url;
         this.datam.publisher=res.data.recipe.publisher;
         this.datam.title=res.data.recipe.title;
        console.log(this.datam.imagerl);
        console.log(this.datam.ingredients);
      });
      this.cont++;
      this.dataserv.setdata(this.cont,this.datam);
      this.router.navigateByUrl('/details/'+this.cont);
 }
}
