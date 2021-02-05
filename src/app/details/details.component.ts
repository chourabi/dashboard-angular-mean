import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id;

  title;
  description;
  price;
  picture;


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.id = this.route.snapshot.params.id;
    this.title = this.route.snapshot.params.title;
    this.description = this.route.snapshot.params.description;
    this.picture = this.route.snapshot.params.picture;
    this.price = this.route.snapshot.params.price;
    
  }

}
