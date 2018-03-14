import { MeetingsService } from "./meetings.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { TaskService } from "./task.service";
import { AppComponent } from "./app.component";
import { CreateMeetingComponent } from "./meetings/create-meeting/create-meeting.component";
import { HttpClient } from "selenium-webdriver/http";
import { ListMeetingComponent } from "./meetings/list-meeting/list-meeting.component";
import { AppRoutingModule } from ".//app-routing.module";
import { GetTaskComponent } from "./task/listTask/get-task/get-task.component";
import { ListTaskComponent } from "./task/listTask/list-task/list-task.component";
import { DetailTaskComponent } from "./task/listTask/detail-task/detail-task.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateMeetingComponent,
    ListMeetingComponent,
    GetTaskComponent
  ],
  imports: [BrowserModule, HttpModule, AppRoutingModule],
  providers: [MeetingsService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
