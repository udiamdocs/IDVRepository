import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
storeSelected:boolean=false;
dateSelected:boolean=false;
detailSubmited:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
