import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataModel } from 'src/app/data.model';
import { ApiservService } from 'src/app/services/apiserv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data: any ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data=this.route.snapshot.data.special;
  }

}
