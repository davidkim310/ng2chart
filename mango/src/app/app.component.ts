import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  items: any[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData()
    .subscribe(
      data => {
        const dataArray = [];
        
        for(let i = 0; i < 30; i++) {
          let dataObj = { business: "",
                          category: "",
                          item: ""
                        };
          // for(let key in data[i]) {
          // dataArray.push(key);
          // }
          if(data[i].business){
          dataObj.business = data[i].business
          dataObj.category = data[i].category
          dataObj.item = data[i].item
          dataArray.push(dataObj)
          // console.log("obj", dataObj)
          }
        }
          this.items = dataArray
          console.log("newArray", this.items)
      }
    )
  }
}
