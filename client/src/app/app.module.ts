import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreateMeetingComponent } from './meetings/create-meeting/create-meeting.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateMeetingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
