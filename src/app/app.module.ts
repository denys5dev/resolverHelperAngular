import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";

import { RouterModule, Routes } from "@angular/router";
import { MyServiceService } from "./my-service.service";
import { ResolverService } from "./Resolver.service";

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "path", component: Child1Component },
  {
    path: "path/:id",
    component: Child1Component,
    resolve: {
      detail: ResolverService
    }
  },
  { path: "**", component: AppComponent }
];

export class AppRoutingModule {}

@NgModule({
  declarations: [AppComponent, Child1Component, Child2Component],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpModule],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
