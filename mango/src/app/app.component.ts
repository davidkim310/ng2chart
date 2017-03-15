import { Component, ViewChild, ElementRef, Pipe, PipeTransform, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { FilterPipe } from './filter.pipe';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  @ViewChild('input')
  input: ElementRef;
  items: any[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    let events = Observable.fromEvent(this.input.nativeElement, 'keyup')
    events.subscribe();
    this.httpService.getData()
    .subscribe(
      data => {
        const dataArray = [];
        
        for(let i = 0; i < 35; i++) {
          let dataObj = { business: "",
                          category: "",
                          item: ""
                        };
          if(data[i].business){
          dataObj.business = data[i].business
          dataObj.category = data[i].category
          dataObj.item = data[i].item
          dataArray.push(dataObj)
          }
        }
          this.items = dataArray
      }
    )
  }

  sortCategory() {
    this.items.sort(function(a, b) {
      var A = a.category.toUpperCase();
      var B = b.category.toUpperCase();
      return (A < B) ? -1 : (A > B) ? 1 : 0;
    });
  }

  sortBusiness(){
    this.items.sort(function(a, b) {
      var A = a.business.toUpperCase();
      var B = b.business.toUpperCase();
      return (A < B) ? -1 : (A > B) ? 1 : 0;
    });
  }

  sortItem(){
    this.items.sort(function(a, b) {
      var A = a.item.toUpperCase();
      var B = b.item.toUpperCase();
      return (A < B) ? -1 : (A > B) ? 1 : 0;
    });
  }
}
