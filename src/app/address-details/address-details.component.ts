import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../services/form-data.service';
import { AddressDetails } from '../models/address-details'

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
  addressDetails: AddressDetails;
  constructor(private formDataService: FormDataService) { 
    this.addressDetails = formDataService.addressDetails;
    
  }

  ngOnInit(): void {
  }
  submit(){
    this.formDataService.postData();
  }
}
