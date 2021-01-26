import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDisabled = true;

  constructor(){
    console.log("main app constructor");
    
    setTimeout(() => {
      this.isDisabled = ! this.isDisabled
    }, 4000);

  }


  title = 'hello world';

  date = new Date();

  somme:string = "5+6";

  employees = [
    { avatar:'../assets/2.png', fullname:"employee 1" , phonenumber: 44558899 , isnew : false , exp:['*','*','*',] },
    { avatar:'../assets/1.png',fullname:"employee 1" , phonenumber: 44558899 , isnew : false , exp:['*','*',] },
    { avatar:'../assets/1.png',fullname:"employee 1" , phonenumber: 44558899 , isnew : true , exp:['*','*','*',] },
    { avatar:'../assets/1.png', fullname:"employee 1" , phonenumber: 44558899 , isnew : false , exp:[] },
    
  
  ];

  






}
