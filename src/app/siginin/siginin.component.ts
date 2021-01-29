import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siginin',
  templateUrl: './siginin.component.html',
  styleUrls: ['./siginin.component.css']
})
export class SigininComponent implements OnInit {


  auth = new FormGroup({
    pass : new FormControl('',Validators.required)
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  connect(){
    const pass = this.auth.value.pass;

    if (pass === 'admin') {
      localStorage.setItem('token','123');
      
      this.router.navigate(['/products']);
    } else {
      alert("you are not auth");
    }
    
  }

}
