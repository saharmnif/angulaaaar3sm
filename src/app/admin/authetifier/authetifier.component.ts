import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  loginForm!:FormGroup;
  message:String="";

  constructor( private A: AuthentificationService , private fb : FormBuilder  , private router:Router ) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      login:['', Validators.required],
      password:['', Validators.required]
    })
    
    
    
    this.tabadmin$=this.A.getAdmin();
  
 
      
}
onSubmit(){
    this.A.login(this.loginForm.value['login'] ,this.loginForm.value ['password']).subscribe(
      Admin=>{
        if (Admin.length=0){
          this.message="echec";
          this.loginForm.reset();
        }
        else 
        this.router.navigate(['admin/dashboard']);
      }
    )
} 

}