import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('https://data.ct.gov/resource/y6p2-px98.json?')
    .map((response: Response) => response.json())
  }
}
