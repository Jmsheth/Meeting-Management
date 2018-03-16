import { OrderByDoneAndDatePipe } from './../../order-by-done-and-date.pipe';
import { MeetingsService } from './../../meetings.service';
import { Component, OnInit,Pipe,Inject,forwardRef,Injectable, PipeTransform  } from '@angular/core';
import { Http } from '@angular/http';    
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { NgModel } from '@angular/forms';
import { Meeting } from "./../../meeting";
@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css'],

})
export class CreateMeetingComponent implements OnInit {
  userFilter: any = 'jmsheth53@gmail.com';

  constructor(  private meetingservice:MeetingsService) { }
   // Local properties
   private model = new Meeting('','','',new Date(),new Date(),'',this.userFilter);
  submitMeeting(){
    // Variable to hold a reference of addComment/updateComment
    let meetingOperation:Observable<Meeting[]>;  
    meetingOperation = this.meetingservice.addMeeting(this.model)

    // Subscribe to observable
    meetingOperation.subscribe(
                            meetings => {
                               
                                // Empty model
                                this.model = new Meeting('','','',new Date(),new Date(),'',this.userFilter);
                               
                            }, 
                            err => {
                                // Log errors if any
                                console.log(err);
                            });
}
  
  ngOnInit() {

    
  }

}
