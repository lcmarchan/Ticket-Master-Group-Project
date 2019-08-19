import { Component, OnInit } from "@angular/core";
import { EventService } from "src/app/services/event.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  eventData: any;

  constructor(private eventService: EventService) {}

  ngOnInit() {}

  getData(keyword: any): void {
    this.eventService.getData(keyword).subscribe(
      response => {
        this.eventData = response.data;
        console.log(response);
      },
      error => console.log(error)
    );
  }
}
