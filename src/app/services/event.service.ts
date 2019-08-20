import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EventService {
  eventList: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  // Http client deals with observable so you need to say what type you are returning.
  getData(keyword: string) {
    console.log("This sorta works??");
    this.http
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=qeFcLJvWSqBRCQ0nFcMSyQWsI8rOcEGO
    `
      )
      .subscribe(response => {
        console.log(response);
        this.eventList = response["_embedded"].events;
        console.log(this.eventList);
        this.router.navigate(["event-list"]);
      });
  }
}
