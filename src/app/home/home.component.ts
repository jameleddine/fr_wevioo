import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../shared/global.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[GlobalService]
})
export class HomeComponent implements OnInit {
 urlInfo : boolean;
  constructor(private global : GlobalService) { }

  ngOnInit() {
    
  }
  
  ngDoCheck() {
    this.urlInfo = this.global.getUrlInfo();
    console.log(this.urlInfo)
  }


}
