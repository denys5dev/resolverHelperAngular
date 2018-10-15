import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";

@Injectable()
export class MyServiceService {
  api = "https://jsonplaceholder.typicode.com/";
  constructor(private _http: Http) {}

  getSomeDataById(id) {
    return this._http
      .get(`${this.api}posts/${id}`)
      .pipe(map(res => res.json()));
  }

  getSomeData() {
    return this._http.get(`${this.api}posts`).pipe(map(res => res.json()));
  }
}
