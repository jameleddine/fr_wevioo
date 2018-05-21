import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MycrudService} from './../../../shared/mycrud.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[MycrudService]
})
export class DashboardComponent implements OnInit {
result :any = [];
contract:string;
date:Date;
title:string;

  constructor(private http : HttpClient , private myservice:MycrudService) { }

  ngOnInit() {
    this.getPostList();
  }
  resetPipe(){
    this.contract="";
    this.date=null;
    this.title="";
  }
  getPostList(){
    this.myservice.getAllOffres().subscribe(data=>{
      this.result = data
      this.result.entry_date = this.result.entry_date.splice(0,10);
    })
  }

  deletePostById(id){
    this.myservice.deleteOffreById(id).subscribe(data=>{
      console.log(data)
      this.result = data;
      this.getPostList();
    })
  }

}
