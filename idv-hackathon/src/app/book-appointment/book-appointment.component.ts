import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
storeSelected:boolean=false;
dateSelected:boolean=false;
detailSubmited:boolean=false;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.route.events.subscribe(()=>{
      if(this.route.url.indexOf('details') > 0){
        this.dateSelected =true;
        this.storeSelected=true;
      }else if(this.route.url.indexOf('chooseDate') > 0){
        this.storeSelected=true;
        this.dateSelected =false;
      }
      else if(this.route.url.indexOf('selectStore') > 0){
        this.storeSelected=false;
        this.dateSelected=false;
      }
    });

  }

}
