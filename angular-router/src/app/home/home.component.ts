import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgurl = ".././assets/images/1.jpg";
  imgurl1 = ".././assets/images/2.jpg";
  imgurl2 = ".././assets/images/3.jpg";

}
