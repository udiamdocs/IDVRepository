import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-date-time',
  templateUrl: './choose-date-time.component.html',
  styleUrls: ['./choose-date-time.component.css']
})
export class ChooseDateTimeComponent implements OnInit {
  stores: any[] = [
    {"city": "Bath","location": "Stall Street","dateTime": "Friday, 4th June at 9.30am"},
    {"city": "Bath","location": "Southgate","dateTime": "Friday, 4th June at 9.30am"}
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clicked() {
    this.router.navigate(['/bookAppointment/details']);
  }


}
