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
  bootstrap: [AppComponent]
})
export class AppModule { }
