import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-date-time',
  templateUrl: './choose-date-time.component.html',
  styleUrls: ['./choose-date-time.component.css']
})
export class ChooseDateTimeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  clicked(){
    this.router.navigate(['/bookAppointment/details']);
  }


}
