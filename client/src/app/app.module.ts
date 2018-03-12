import { MeetingsService } from './meetings.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateMeetingComponent } from './meetings/create-meeting/create-meeting.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ListMeetingComponent } from './meetings/list-meeting/list-meeting.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CreateMeetingComponent,
    ListMeetingComponent
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
