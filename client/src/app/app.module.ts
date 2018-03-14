<<<<<<< HEAD
import { MeetingsService } from './meetings.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateMeetingComponent } from './meetings/create-meeting/create-meeting.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ListMeetingComponent } from './meetings/list-meeting/list-meeting.component';
import { AppRoutingModule } from './/app-routing.module';
import { GetTaskComponent } from './task/listTask/get-task/get-task.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { OrderByDoneAndDatePipe } from './order-by-done-and-date.pipe';
=======
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
>>>>>>> 0b6335a8e1e582ae6c69c1877e8b847fd53e313f

@NgModule({
  declarations: [
    AppComponent,
    CreateMeetingComponent,
    ListMeetingComponent,
    GetTaskComponent,
   
    OrderByDoneAndDatePipe
  ],
<<<<<<< HEAD
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    Ng2FilterPipeModule
  ],
  providers: [MeetingsService],
=======
  imports: [BrowserModule, HttpModule, AppRoutingModule],
  providers: [MeetingsService, TaskService],
>>>>>>> 0b6335a8e1e582ae6c69c1877e8b847fd53e313f
  bootstrap: [AppComponent]
})
export class AppModule {}
