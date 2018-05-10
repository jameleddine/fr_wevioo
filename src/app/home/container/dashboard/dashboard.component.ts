import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
result :any = [];
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getPostList();
  }

  getPostList(){
    this.result = this.http.get('http://localhost:3000/posts');
  }
}
