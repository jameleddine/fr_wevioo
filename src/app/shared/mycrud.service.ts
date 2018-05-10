import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MycrudService {

  constructor(private http: HttpClient) { }

  getAllOffres():any{
    return this.http.get("http://localhost:3000/posts");
  }
  getOffreById(id):any{
    return this.http.get("http://localhost:3000/post/"+id);
  }
}
