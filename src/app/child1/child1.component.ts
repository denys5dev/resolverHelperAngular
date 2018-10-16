import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from "@angular/core";
import { MyServiceService } from "../my-service.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import {
  switchMap,
  first,
  publishLast,
  refCount,
  map,
  share,
  take,
  filter
} from "rxjs/operators";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit, OnDestroy {
  title = "ObservableHelper";
  posts$: Observable<any>;
  manyPosts$: Observable<any>;
  sub: any;
  loading: boolean = false;

  constructor(
    private service: MyServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.posts$ = this.service.postsObs$;

    this.sub = this.route.params
      .pipe(map(params => params))
      .subscribe(param => {
        this.loading = true;
        this.service.getSomeDataById(param["id"]).subscribe(
          () => {
            this.loading = false;
            console.log("success");
          },
          error => {
            this.loading = false;
            console.error("error");
          }
        );
      });

    // this.posts$ = this.route.data.pipe(map(data => data["detail"][0]));
  }

  onChange(e) {
    this.router.navigate([`./path`, e.target.value]);
  }

  tryUpdate() {
    this.loading = true;
    this.service.getSomeData().subscribe(
      () => {
        this.loading = false;
        console.log("success");
      },
      error => {
        this.loading = false;
        console.error("error");
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
