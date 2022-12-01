import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  inscrireForm!:FormGroup;
  constructor( private fb:FormBuilder) { }
  lesVilles: string[] = [
    'Tunis', 'Ariana', 'Ben arous' ,'Manouba','Bizerte', 'Sousse', 'Sfax' ,'nabeul' ,'Mahdia' , 'Zaghouan' , 'Beja' ,'Kef' ,'Jendouba' 
    ,' Kasserine' , 'Gabes','Tozeur' ,'Monastir' , 'Kebelli', 'Sidi bouzid' ,'Gafsa','Medenine','Tataouin','Kairouan'];
  ngOnInit(): void {
this.inscrireForm=this.fb. nonNullable.group({
  nom:['', Validators.required],
   prenom: ['',Validators.required],
   datedenais: [''],
   tel: [''],
  ville : [''],
   motdepasse: ['',Validators.required],
   mail:['compte@gmail.com'],
   sexe:[''],}) 
}
onReset(){
  this.inscrireForm.reset();
  }
  onSubmitForm() {
    
  }
}

