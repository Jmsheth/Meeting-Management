import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { TaskService } from "./../../../task.service";

@Component({
  selector: "app-get-task",
  templateUrl: "./get-task.component.html",
  styleUrls: ["./get-task.component.css"]
})
export class GetTaskComponent implements OnInit {
  tasks: any[];
  constructor(private taskservice: TaskService) {}
  // Get all comments
  loadTasks() {
    this.taskservice.getTask().subscribe(
      tasks => (this.tasks = tasks), //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      }
    );
  }
  // this.taskService.getTask().subscribe(response => {
  //     console.log(response.json());
  //     this.tasks = response.json();
  //   });
  ngOnInit() {
    this.loadTasks();
  }
  // createPost(taskName: HTMLInputElement) {
  //   let post = { taskName: taskName.value };
  //   this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
  //     console.log(response.json());
  //   });
  // }
}
