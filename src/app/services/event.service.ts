import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EventService {
  eventList: any[] = [];
  favoriteList: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  // Http client deals with observable so you need to say what type you are returning.
  getData(
    keyword: string,
    startDateTime: string,
    endDateTime: string,
    city: object
  ) {
    this.http
      .get(
        `https://app.ticketmaster.com/discovery/v2/events?apikey=jmMcmgjfpxGx8rV6Z6PsXR5tpOEjuJHt&keyword=${keyword}&locale=*&startDateTime=${startDateTime}T00:00:00Z&endDateTime=${endDateTime}T23:59:59Z&city=${city}`
      )
      .subscribe(response => {
        this.eventList = response["_embedded"].events;
        this.router.navigate(["event-list"]);
      });
  }
  addToFavorites(index: number) {
    this.favoriteList.push(index);
    console.log(this.favoriteList);
  }
}
