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
  getData(
    keyword: string,
    startDateTime: string,
    endDateTime: string,
    city: object
  ) {
    console.log("This sorta works??");
    this.http
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=jmMcmgjfpxGx8rV6Z6PsXR5tpOEjuJHt&keyword=${keyword}&locale=*&startDateTime=${startDateTime}T00:00:00Z&endDateTime=${endDateTime}T23:59:59Z&city=${city}`
      )
      .subscribe(response => {
        console.log(response);
        this.eventList = response["_embedded"].events;
        console.log(this.eventList);
        this.router.navigate(["event-list"]);
      });
  }
}
//https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&startDateTime=${startDateTime}&endDateTime=${endDateTime}&city=${city}&apikey=qeFcLJvWSqBRCQ0nFcMSyQWsI8rOcEGO

// https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=qeFcLJvWSqBRCQ0nFcMSyQWsI8rOcEGO&keyword=${keyword}&locale=*&startDateTime=${startDateTime}T00:00:00Z&endDateTime=${endDateTime}T23:59:59Z&city=${city}`
