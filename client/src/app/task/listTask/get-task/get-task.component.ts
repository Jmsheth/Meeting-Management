import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
@Component({
  selector: "app-get-task",
  templateUrl: "./get-task.component.html",
  styleUrls: ["./get-task.component.css"]
})
export class GetTaskComponent implements OnInit {
  constructor(http: Http) {
    http.get("http://127.0.0.1:4000/api/tasks").subscribe(response => {
      console.log(response);
    });
  }
  ngOnInit() {}
}
