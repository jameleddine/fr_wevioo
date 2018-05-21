import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  myform:FormGroup;
  name:string;
  email:string;
  password:string;
  confirmPassword:string;

  constructor(private re:Router) { }

  ngOnInit() {
    this.myform = new FormGroup({
      formname : new FormControl('',Validators.required),
      formemail : new FormControl('',[Validators.required,Validators.email]),
      formpassword : new FormControl('',[Validators.required,Validators.minLength(8)]),
      formconfirmpassword : new FormControl('',[Validators.required,Validators.minLength(8)]),
    })
  }
  subscribe(){
    let data={
      name: this.name,
      email:this.email,
      password:this.password,
      confirmPassword : this.confirmPassword
    }
    console.log(data)
    if(this.password==this.confirmPassword)
    {
      localStorage.setItem('user',JSON.stringify(data));
      this.re.navigate(['/login']);
    }
    else{
      alert("error confirm password");
    }
  }
}
