import { AppointmentService } from './../Service/appointment.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Time } from '@angular/common';

@Component({
  selector: 'app-addAppointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
    date: Date;
    time: Time;
    desc: String;
    keyword: String;
    showForm:boolean=false;
    message: String = null;

  constructor(private http : Http, private _appointService: AppointmentService) {   }

  ngOnInit() {

  }

  toggleView() :void {
    this.showForm =!this.showForm;
  }

  onSubmit(){
    const appoint = {
      date: this.date,
      time: this.time,
      desc: this.desc
    }
   if(this._appointService.validateRegister(appoint)){
    this.http.post('http://localhost:3000/api/appointment', appoint)
    .subscribe((res) =>{
      this.message = "Data is addeded successfully !"
    });
   }

  }
}
