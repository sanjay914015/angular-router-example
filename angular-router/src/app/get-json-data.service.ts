import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetJsonDataService {

  constructor(private ht:HttpClient) { }
  getdata()
  {
    return this.ht.get("https://localhost:44361/api/todocustomers");
  }
  postdata(fooddata:any)
  {
    return this.ht.post("http://localhost:3000/food",fooddata);
  }
}
