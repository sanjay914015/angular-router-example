import { Component, OnInit } from '@angular/core';
import { GetJsonDataService } from '../get-json-data.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public ht: GetJsonDataService) { }

  ngOnInit(): void {
    this.ht.getdata().subscribe((data) => this.Show(data));
  }

  htdata: any;
  Show(data: any)
  {
    this.htdata = data;
    console.log(this.htdata);
  }

  getjsondata()
  {
    console.log(this.htdata);
  }
}
