import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formidable',
  templateUrl: './formidable.component.html',
  styleUrls: ['./formidable.component.css']
})
export class FormidableComponent implements OnInit {


  myForm = new FormGroup({
    myinput : new FormControl('custom value')
  });

  constructor() { }

  ngOnInit(): void {
  }


  submit(){
    console.log("event submit triggred");
    console.log(this.myForm.value);
    
    
  }

}
