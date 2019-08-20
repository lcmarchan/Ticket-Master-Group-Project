import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { EventListComponent } from "./event-list/event-list.component";
import { BucketlistPageComponent } from "./bucketlist-page/bucketlist-page.component";
import { FormsModule } from "@angular/forms";
// import { RoutingService } from "./routing.service";

const appRoutes: Routes = [
  { path: "bucketlist-page", component: BucketlistPageComponent },
  { path: "event-list", component: EventListComponent },
  { path: "search-criteria", component: SearchCriteriaComponent },
  { path: "", redirectTo: "/search-criteria", pathMatch: "full" }
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
    FormsModule,
    HttpClientModule
  ],
  // providers: [RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
