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

  getData(form: any): void {
    this.eventService.getData(form.value.keyword).subscribe(
      response => {
        this.eventData = response.data;
        console.log(this.eventData);
      },
      error => console.log(error)
    );
  }
}
