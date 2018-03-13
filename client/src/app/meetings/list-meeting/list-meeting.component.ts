import { MeetingsService } from './../../meetings.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {
  meetings: any[];
  constructor(  private meetingservice:MeetingsService) { }
    loadMeetings(){
    // Get all comments
    this.meetingservice.getMeetings()
    .subscribe(
      meetings => this.meetings = meetings, //Bind to view
         err => {
             // Log errors if any
             console.log(err);
         });
        }  
 
  ngOnInit() {
    //load meetings
    this.loadMeetings()
  }


}
