import { Component, OnInit } from "@angular/core";
import { MyServiceService } from "./my-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ObservableHelper";
  constructor(private service: MyServiceService) {}
  ngOnInit() {}
}
