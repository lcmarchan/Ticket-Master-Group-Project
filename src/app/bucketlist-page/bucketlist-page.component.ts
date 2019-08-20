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

  toggleDetails(index: number): void {
    this.favoriteList[index].showDetails = !this.favoriteList[index]
      .showDetails;
  }

  removeFavorite(favoriteIndex): void {
    this.favoriteList.splice(favoriteIndex, 1);
  }
  // removeBook(index: number): void {
  //   this.onRemove.emit(index);
  // }
}
