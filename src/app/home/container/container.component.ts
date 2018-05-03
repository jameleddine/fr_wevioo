import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  hello:string = "hello";
  count: number = 0;
  constructor() { }

  ngOnInit() {
  }

  increment():number{
    return this.count ++ ;
  }
  decrement():number{
    return this.count -- ;
  }
}
