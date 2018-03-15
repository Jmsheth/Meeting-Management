import { OrderByDoneAndDatePipe } from './../../order-by-done-and-date.pipe';
import { MeetingsService } from './../../meetings.service';
import { Component, OnInit,Pipe,Inject,forwardRef,Injectable, PipeTransform  } from '@angular/core';
import { Http } from '@angular/http';    

import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css'],

})
export class CreateMeetingComponent implements OnInit {
  userFilter: any = { m_participant: 'jmsheth53@gmail.com' };
  meetings: any[];
  term:any;
  today: number = Date.now();

  constructor(  private meetingservice:MeetingsService) { }
  update(value){
    this.term=value;
  }
  
    loadMeetings(){
      
    // Get all comments
    this.meetingservice.getMeetings()
    .subscribe(
      meetings =>{ this.meetings = meetings;
        this.meetings.sort((a, b) => new Date(a.from_date).getTime() - new Date(b.from_date).getTime());
         },
      //Bind to view
         err => {
             // Log errors if any
             console.log(err);
         }
        );      
 
      }  
  
      deleteMeeting(id:string) {
        // Call removeComment() from CommentService to delete comment
        this.meetingservice.removeMeeting(id).subscribe(
          meetings =>{ this.meetings = meetings;
            this.meetings.sort((a, b) => new Date(a.from_date).getTime() - new Date(b.from_date).getTime());
             },
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
