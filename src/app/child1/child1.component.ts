import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MyServiceService } from "../my-service.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import {
  switchMap,
  first,
  publishLast,
  refCount,
  map,
  share,
  take
} from "rxjs/operators";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit {
  title = "ObservableHelper";
  posts$: Observable<any>;
  manyPosts$: Observable<any>;

  constructor(
    private service: MyServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    // this.service.getSomeData().subscribe(res => {});

    // this.posts$ = this.route.params.pipe(
    //   switchMap(params => this.service.getSomeDataById(params["id"])),
    //   first(),
    //   publishLast(),
    //   refCount()
    // );

    this.posts$ = this.route.data.pipe(map(data => data["detail"][0]));
  }

  onChange(e) {
    this.router.navigate([`./path`, e.target.value]);
  }

  tryUpdate() {
    this.service.getSomeData().subscribe(
      () => {
        console.log("success");
      },
      error => {
        console.error("error");
      }
    );
  }
}
