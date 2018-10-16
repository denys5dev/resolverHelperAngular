import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable, BehaviorSubject } from "rxjs";

import {
  map,
  tap,
  publishLast,
  refCount,
  switchMap,
  first,
  share,
  take,
  takeLast
} from "rxjs/operators";

@Injectable()
export class MyServiceService {
  api = "https://jsonplaceholder.typicode.com/";
  public subject = new BehaviorSubject<any>([]);
  postsObs$: Observable<any[]> = this.subject.asObservable();
  constructor(private _http: Http) {}

  getSomeDataById(id) {
    return this._http.get(`${this.api}posts/${id}`).pipe(
      map(res => res.json()),
      tap(data => this.subject.next(data)),
      publishLast(),
      refCount()
    );
  }

  getSomeData() {
    return this._http.get(`${this.api}posts`).pipe(
      map(res => res.json()),
      switchMap(data => this.getSomeDataById(1)),
      publishLast(),
      refCount()
    );
  }
}
