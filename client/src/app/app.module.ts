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


@NgModule({
  declarations: [
    AppComponent,
    CreateMeetingComponent,
    ListMeetingComponent,
    GetTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MeetingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
