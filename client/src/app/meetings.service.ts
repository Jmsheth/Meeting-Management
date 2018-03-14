import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Meeting } from "./meeting";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class MeetingsService {
<<<<<<< HEAD

  constructor (private http: Http) {}
  private meetingUrl = 'http://127.0.0.1:4000/api/meetings/';  // URL to web api 
 /** GET meetings from the server */
 getMeetings() : Observable<Meeting[]> {

  // ...using get request
  return this.http.get(this.meetingUrl)
                 // ...and calling .json() on the response to return data
                  .map((res:Response) => res.json())
                  //...errors if any
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                }
};
=======
  constructor(private http: Http) {}
  private meetingUrl = "http://127.0.0.1:4000/api/meetings/"; // URL to web api
  /** GET meetings from the server */
  getMeetings(): Observable<Meeting[]> {
    // ...using get request
    return (
      this.http
        .get(this.meetingUrl)
        // ...and calling .json() on the response to return data
        .map((res: Response) => res.json())
        //...errors if any
        .catch((error: any) =>
          Observable.throw(error.json().error || "Server error")
        )
    );
  }
}
>>>>>>> 0b6335a8e1e582ae6c69c1877e8b847fd53e313f
