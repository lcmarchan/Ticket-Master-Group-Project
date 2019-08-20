import { Component, OnInit } from "@angular/core";
import { EventService } from "../services/event.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  eventData: any[];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventData = this.eventService.eventList;
  }
}

// private searchCriteria: SearchCriteriaComponent
