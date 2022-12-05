import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Parfum } from 'src/app/Model/parfum';
import { ParfumService } from 'src/app/service/parfum.service';

@Component({
  selector: 'app-parfumajouter',
  templateUrl: './parfumajouter.component.html',
  styleUrls: ['./parfumajouter.component.css']
})
export class ParfumajouterComponent implements OnInit {
  parfumForm!:FormGroup;
  ap!:Parfum[];
  nom1: string;


  constructor(private activatedRoute:ActivatedRoute ,private pfn: ParfumService , private formBuilder:FormBuilder) { }
   

  ngOnInit(): void {
    
    this.parfumForm = this.formBuilder.nonNullable.group({
      nom:[''],
      prix:[0],
      marque:[''],
      categorie:[''],
      dats:[''],
    })

    this.pfn.getParfum().subscribe (data => this.ap = data)
    
  }
  addParfum(){
  this.pfn.addParfum(this.parfumForm.value).subscribe (data=> this.ap.push(data));
}
}
