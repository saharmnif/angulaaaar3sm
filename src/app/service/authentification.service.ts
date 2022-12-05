import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Admin } from '../Model/admin';

const URL='http://localhost:3000/Admin';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  admin!:Admin;
  role='autre';
  constructor(private http :HttpClient, private router:Router ) { }
    loginauth(login:string , pwd:string){
  if (login=="molkaetsahar" && pwd=="projet"){
       this.role="admin";
   }
     else this.role="autre";
    return this.role;
   }

  login(login:string , pwd :string ):Observable<Admin[]>{
    return this.http.get<Admin[]>(URL+"?login="+login+"&pwd="+pwd) ;}
  getAdmin():Observable<Admin[]> {
    return this.http.get<Admin[]>(URL);

  }


  
}
