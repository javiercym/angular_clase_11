import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {
  
  public validar!: FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.validar = this.formBuilder.group({
      name:['', 
        [
          Validators.required
        ]
      ]
    })
  }
}
