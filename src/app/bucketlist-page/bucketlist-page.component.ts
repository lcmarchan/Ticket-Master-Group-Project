import { Component, OnInit } from "@angular/core";
import { EventService } from "src/app/services/event.service";

@Component({
  selector: "app-bucketlist-page",
  templateUrl: "./bucketlist-page.component.html",
  styleUrls: ["./bucketlist-page.component.css"]
})
export class BucketlistPageComponent implements OnInit {
  favoriteList: any[];
  showDetails: boolean;
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.favoriteList = this.eventService.favoriteList;
  }
}
