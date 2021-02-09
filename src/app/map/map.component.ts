import { Position } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  watchId

  myPosition:any;

  ngOnInit(): void {
    this.start()
  }

  start(){

    this.watchId = navigator.geolocation.watchPosition((position:any)=>{
      console.log(position);
      this.myPosition = position;
      
    })

  }

  stop(){
    navigator.geolocation.clearWatch(this.watchId);
    console.log("watch stopped");
    
  }

}
