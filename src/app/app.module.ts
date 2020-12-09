import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AppRoutingModule } from "./app-routing.module";
//import { PersonalDetails } from './models/personal-details';
//import { AddressDetails } from './models/address-details';
import { FormsModule } from '@angular/forms';
import { FormDataService } from './services/form-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    AddressDetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule,FormsModule,AppRoutingModule
  ],
  exports: [RouterModule,AppRoutingModule
],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

