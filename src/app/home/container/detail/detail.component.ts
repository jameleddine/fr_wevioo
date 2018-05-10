import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MycrudService} from './../../../shared/mycrud.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[MycrudService]
})
export class DetailComponent implements OnInit {
  idOffre:any;
  offre:any = [];
  constructor(private router:ActivatedRoute,private http:HttpClient,private myservice: MycrudService) { }

  ngOnInit() {
    this.getOffreById();
  }

  getOffreById(){
    this.router.params.subscribe( data => {
      this.idOffre = data['id'];
      this.myservice.getOffreById(this.idOffre).subscribe(offre=>{
        this.offre = offre;
      })
    });

  }

  updateDate(data){
    this.http.put('http://localhost:3000/post/'+data._id,data).subscribe(result=>{
      console.log(result)
    })
  }

}
