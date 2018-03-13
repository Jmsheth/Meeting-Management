import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Task } from "./task";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
@Injectable()
export class TaskService {
  private url = "http://127.0.0.1:4000/api/tasks";
  constructor(private http: Http) {}
  getTask(): Observable<Task[]> {
    return this.http
      .get(this.url)
      .map((res: Response) => res.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }
}
