import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Parfum } from '../Model/parfum';
const URL ='http://localhost:3700/Parfum';
@Injectable({
  providedIn: 'root'
})
export class ParfumService {
 
  listPrfum!: Parfum;
  nonNullable: any;
  constructor(private http :HttpClient) { }
    getParfum():Observable<Parfum[]> {
      return this.http.get<Parfum[]>(URL);

    }
   getParfumByid(id :number):Observable<Parfum> {
    return  this.http.get<Parfum>(URL + '/'+ id);
   }

   addParfum(p:Parfum):Observable<Parfum>{
    return this.http.post<Parfum>(URL, p);
    }
    updateParfum(id:number, p:Parfum):Observable<Parfum>{
      return this.http.put<Parfum>(URL+"/"+ id, p);
      }
    deleteParfum(id:number):Observable<Parfum>{
      return this.http.delete<Parfum>(URL+"/"+ id);
      }
        
      
 

}
