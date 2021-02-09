import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   @ViewChild('myinput',{static:true}) myInput:ElementRef;



  constructor() {
    console.log("hello i'm the constructor");

  }


  doAsyncTask(){
    var promise = new Promise((resolve,reject)=>{

      setTimeout(()=>{
        resolve({success:false})
      },6000)

    }) 

    return promise;

  }


  async callAsyncTask(){
    var res = await this.doAsyncTask();
    var res2 = await this.doAsyncTask();
    

    console.log(res);
    console.log(res2);
    
  }


   ngOnInit(): void {
    console.log("hello ng on init");
    this.myInput.nativeElement.focus();



    /************** promise ************** */

   
    this.callAsyncTask();
   
    


    /**
     * promise.then((value)=>{
      console.log(value);

    }).catch((error)=>{
      console.log(error);
      
    })

     */





  }

  ngAfterViewInit(){
    console.log("after view init");
    
  }

}
