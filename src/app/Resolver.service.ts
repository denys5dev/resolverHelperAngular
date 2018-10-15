import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { MyServiceService } from "./my-service.service";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ResolverService implements Resolve<any> {
  constructor(private service: MyServiceService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.service.getSomeDataById(route.params["id"]).pipe(
      switchMap(
        posts => this.service.getSomeData(),

        (a, b) => [a, b]
      )
    );
  }
}
