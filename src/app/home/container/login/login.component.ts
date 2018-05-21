import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  constructor(private re:Router) { }

  ngOnInit() {
  }
  login(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user.email == this.email && user.password == this.password){
      this.re.navigate(['/']);
    }
    else{
      alert("login Error");
    }
  }

}
