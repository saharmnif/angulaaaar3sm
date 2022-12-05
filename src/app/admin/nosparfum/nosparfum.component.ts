import { Component, OnInit } from '@angular/core';
import { Parfum } from 'src/app/Model/parfum';
import { ParfumService } from 'src/app/service/parfum.service';

import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nosparfum',
  templateUrl: './nosparfum.component.html',
  styleUrls: ['./nosparfum.component.css']
})
export class NosparfumComponent implements OnInit {
  lesParfums$:Observable<Parfum []>;
  n:any;
  parfumForm!:FormGroup;
  
  constructor( private pfn: ParfumService  , private formBuilder:FormBuilder ) { }
  
  ngOnInit(): void {
    this.lesParfums$=this.pfn.getParfum();
}

onSupprimer(id:number){
  this.pfn.deleteParfum(id).subscribe();
  this.lesParfums$=this.pfn.getParfum();

  }
  onModifier(id:number){
    this.pfn.updateParfum(id, this.parfumForm.value).subscribe(data => console.log(data));
    }
    
  

}