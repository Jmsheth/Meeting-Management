
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { OrderByDoneAndDatePipe } from './order-by-done-and-date.pipe';
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
import { ListTaskComponent } from "./task/listTask/list-task/list-task.component";
import { DetailTaskComponent } from "./task/listTask/detail-task/detail-task.component";
=======
>>>>>>> 0b6335a8e1e582ae6c69c1877e8b847fd53e313f
>>>>>>> 7080346615edc1ab757d0b3cb8b13fad55a66552
>>>>>>> e7e6c88da6d97423280bd1125b3af6cdd79280e8

@NgModule({
  declarations: [
    AppComponent,
    CreateMeetingComponent,
    ListMeetingComponent,
    GetTaskComponent,
   
    OrderByDoneAndDatePipe
  ],

  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    Ng2FilterPipeModule
  ],
  providers: [MeetingsService],

  imports: [BrowserModule, HttpModule, AppRoutingModule],
  providers: [MeetingsService, TaskService],

  bootstrap: [AppComponent]
})
export class AppModule {}
