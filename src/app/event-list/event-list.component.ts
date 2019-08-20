import { Component, OnInit } from "@angular/core";
import { EventService } from "../services/event.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  eventData: any[];

  showDetails: boolean;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventData = this.eventService.eventList;
    this.eventData.forEach(event => {
      event.showDetails = false;
      console.log(this.eventData);
    });
  }

  toggleDetails(index: number): void {
    console.log(index);
    this.eventData[index].showDetails = !this.eventData[index].showDetails;
    console.log("this was clicked");
  }
}

// private searchCriteria: SearchCriteriaComponent
