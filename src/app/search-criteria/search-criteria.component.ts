import { Component, OnInit } from "@angular/core";
import { EventService } from "src/app/services/event.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  eventList: any[];

  constructor(private eventService: EventService) {}

  getData(keyword: any): void {
    this.eventService.getData(keyword);
  }

  ngOnInit() {}
}

// .subscribe(
//   response => {
//     this.eventData = response.data;
//     error => console.log(error)
//     );
