import { Component, OnInit, ViewChild } from "@angular/core";
import { Http } from "@angular/http";
import { TaskService } from "./../../../task.service";
import { Task } from "./../../../task";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-get-task",
  templateUrl: "./get-task.component.html",
  styleUrls: ["./get-task.component.css"]
})
export class GetTaskComponent implements OnInit {
  tasks: Array<Task>;

  taskForm = new FormGroup({
    name: new FormControl()
  });

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
