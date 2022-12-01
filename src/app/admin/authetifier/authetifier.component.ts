import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/Model/admin';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-authetifier',
  templateUrl: './authetifier.component.html',
  styleUrls: ['./authetifier.component.css']
})
export class AuthetifierComponent implements OnInit {
  tabadmin$:Observable<Admin[]>;
  loginForm:FormBuilder;
  n:any;
  constructor( private A: AuthentificationService , private fb : FormBuilder ) { }
  
  ngOnInit(): void {
    this.tabadmin$=this.A. getAdmin();
    // this.loginForm= this.fb.nonNullable.group({
    //   login : ["",Validators.required], pwd : ["",Validators.required] ;
    // })
 
      
}

}