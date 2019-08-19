import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventService {
  constructor(private http: HttpClient) {}

  // Http client deals with observable so you need to say what type you are returning.
  getData(keyword: string): Observable<any> {
    return this.http
      .get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&source=universe&countryCode=US&apikey=qeFcLJvWSqBRCQ0nFcMSyQWsI8rOcEGO
    `);
  }
}
