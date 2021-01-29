import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formidable',
  templateUrl: './formidable.component.html',
  styleUrls: ['./formidable.component.css']
})
export class FormidableComponent implements OnInit {


  myForm = new FormGroup({
    myinput : new FormControl('',Validators.email),
    address : new FormGroup({
      zipcode : new FormControl('',Validators.required),
      address : new FormControl('',[ Validators.minLength(3), Validators.required ])
    })
  });

  constructor() { }

  ngOnInit(): void {
  }


  submit(){
    console.log("event submit triggred");
    console.log(this.myForm);
    
    
  }

}
