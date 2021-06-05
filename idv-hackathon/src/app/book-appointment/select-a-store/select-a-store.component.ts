import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-a-store',
  templateUrl: './select-a-store.component.html',
  styleUrls: ['./select-a-store.component.css']
})
export class SelectAStoreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  clicked(){
    this.router.navigate(['/bookAppointment/chooseDate']);
  }

}
