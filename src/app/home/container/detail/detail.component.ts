import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  idOffre:any;
  offre:any = [];
  constructor(private router:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.getOffreById();
  }

  getOffreById(){
    this.router.params.subscribe( data => {
      this.idOffre = data['id'];
      this.http.get("http://localhost:3000/post/"+this.idOffre).subscribe(offre=>{
        this.offre = offre;
        console.log(this.offre);
      })
      console.log(this.idOffre);
    });

  }

}
