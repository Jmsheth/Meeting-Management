import { Component, OnInit, ViewChild } from "@angular/core";
import { Http } from "@angular/http";
import { TaskService } from "./../../../task.service";
import { Task } from "./../../../task";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs/Rx";
@Component({
  selector: "app-get-task",
  templateUrl: "./get-task.component.html",
  styleUrls: ["./get-task.component.css"]
})
export class GetTaskComponent implements OnInit {
  tasks: Array<Task>;
  //abc: any;

  // taskForm = FormGroup;

  // myabcd() {
  //   console.log(this.abc);
  //   console.log(this.abcd);
  // }

  constructor(private taskservice: TaskService) {}

  submitTask() {
    // Variable to hold a reference of addComment/updateComment
    let taskOperation: Observable<Task[]>;
    this.taskservice.addTask(this.model).subscribe(err => {
      // Log errors if any
      console.log(err);
    });
  }
  //   , private fb: FormBuilder) {
  //   this.createForm();
  // }
  //
  // createForm() {
  //   this.taskForm = this.fb.group({
  //     name: ["", Validators.required] // <--- the FormControl called "name"
  //   });
  // }

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
