import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-your-details',
  templateUrl: './your-details.component.html',
  styleUrls: ['./your-details.component.css']
})
export class YourDetailsComponent implements OnInit {
  detailsGroup: FormGroup;
  showError:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.detailsGroup = new FormGroup({
      'firstName':new FormControl(null,Validators.required),
      'lastName':new FormControl(null,Validators.required),
      'telNumber':new FormControl(null,Validators.required),
      'email':new FormControl(null,Validators.email),
      'canHelp':new FormControl(null,Validators.required)
    });
  }


  onSubmit(){
    if(this.detailsGroup.valid){
      alert("This information will be send through REST.\nFirst Name"+this.detailsGroup.controls.firstName.value+"\nLast Name:"+
      this.detailsGroup.controls.lastName.value+ "\nTelephone Number:"+this.detailsGroup.controls.telNumber.value+"\nEmail:"
      +this.detailsGroup.controls.telNumber.value+"How can we help:"+this.detailsGroup.controls.canHelp.value);
      this.showError=false;
    }else{
      this.showError=true;
    }
  }
}
