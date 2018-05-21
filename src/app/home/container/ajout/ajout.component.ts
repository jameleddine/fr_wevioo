import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { MycrudService } from '../../../shared/mycrud.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
  providers:[MycrudService]
})
export class AjoutComponent implements OnInit {
title:string;
description:string;
contract_type:string;
entry_date:Date;
salaire:string;
  constructor(private http:HttpClient,private router:Router,private crud:MycrudService) { }

  ngOnInit() {
  }
  submit(){
    let data = {
      title:this.title,
      description:this.description,
      contract_type:this.contract_type,
      entry_date:this.entry_date,
      salaire:this.salaire
    }
    this.crud.addNewOffre(data).subscribe(data=>{
      console.log(data);
      if(data){
        this.router.navigate(['/']);
      }
    })

  }
}
