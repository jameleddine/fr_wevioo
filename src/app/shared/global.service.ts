import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
@Injectable()
export class GlobalService {

  constructor(private re : Router) { }

  getUrlInfo():boolean{
    if (this.re.url == "/login" || this.re.url == "/inscription"){
      return false
    }
    return true;
  }
}
