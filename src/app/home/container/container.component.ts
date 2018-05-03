import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  hello:string = "hello";
  count: number = 0;
  name:string;
  phone:number;
  email:string;
  about:string;
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 
  constructor() { }

  ngOnInit() {
  }

  increment():number{
    return this.count ++ ;
  }
  decrement():number{
    return this.count -- ;
  }
  
  saveData(){
    let data = {
      name:this.name,
      email:this.email,
      phone:this.phone,
      about:this.about,
    }
    console.log(data);
  }
}
