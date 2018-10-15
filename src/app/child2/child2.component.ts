import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit, OnChanges {
  @Input()
  posts;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.posts);
  }
}
