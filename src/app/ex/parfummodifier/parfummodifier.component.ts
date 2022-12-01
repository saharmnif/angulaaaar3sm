import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Parfum } from 'src/app/Model/parfum';
import { ParfumService } from 'src/app/service/parfum.service';

@Component({
  selector: 'app-parfummodifier',
  templateUrl: './parfummodifier.component.html',
  styleUrls: ['./parfummodifier.component.css']
})
export class ParfummodifierComponent implements OnInit {
  parfumForm!:FormGroup;

  

  constructor(private activatedRoute:ActivatedRoute ,private pfn: ParfumService , private formBuilder:FormBuilder) { }
  identifiant : number;
  id:number;
  lesParfums$:Observable<Parfum []>;
  ap!:Parfum[];
  ngOnInit(): void {

    
    
    this.parfumForm = this.formBuilder.nonNullable.group({
      prix:[0],
      dats:[''],
      enstock :[''],
    })
   
    
  }
  
  onModifier(id:number){
    this.pfn.updateParfum(id, this.parfumForm.value).subscribe(data => console.log(data));
    }
    
}
