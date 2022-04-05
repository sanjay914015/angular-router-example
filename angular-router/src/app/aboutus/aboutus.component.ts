import { Component, OnInit } from '@angular/core';
import { GetJsonDataService } from '../get-json-data.service';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public ht:GetJsonDataService) { 
  }

  ngOnInit(): void {
    this.ht.getdata().subscribe((data) => this.show(data));

  }
  imgurl = ".././assets/images/1.jpg";
  imgurl1 = ".././assets/images/2.jpg";
  imgurl2 = ".././assets/images/3.jpg";
  imgurl3 = ".././assets/images/4.jpg";
  imgurl4 = ".././assets/images/5.jpg";
htdata:any;
id=""
name=""
shop=""
price=""
url=""
show(data:any)
{
  this.htdata = data;
}
addtocart(id:any)
{
  console.log(this.htdata)
    // console.log(this.htdata[id-1]);
    // this.name = this.htdata[id-1].Name;
    // this.shop= this.htdata[id-1].Shop;
    // this.price = this.htdata[id-1].Price;
    // this.url = this.htdata[id-1].URL;
    // let file= {"id": this.name , "name": this.name};
}


}
