import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { EventListComponent } from "./event-list/event-list.component";
import { BucketlistPageComponent } from "./bucketlist-page/bucketlist-page.component";
import { FormsModule } from "@angular/forms";
// import { RoutingService } from "./routing.service";

const appRoutes: Routes = [
  { path: "bucket-list", component: BucketlistPageComponent },
  { path: "event-list", component: EventListComponent },
  { path: "search-criteria", component: SearchCriteriaComponent },
  { path: "", redirectTo: "/event-list", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    EventListComponent,
    BucketlistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  // providers: [RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
