import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Admin } from '../Model/admin';

const URL2='http://localhost:3400/Admin';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  admin!:Admin;
  constructor(private http :HttpClient) { }

  login(login:string , pwd :string ):Observable<Admin[]>{
    return this.http.get<Admin[]>(URL2+"?login"+login+"&pwd="+pwd) ;}
  getAdmin():Observable<Admin[]> {
    return this.http.get<Admin[]>(URL2);

  }


  
}
