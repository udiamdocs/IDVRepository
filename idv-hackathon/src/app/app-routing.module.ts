import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { ChooseDateTimeComponent } from './book-appointment/choose-date-time/choose-date-time.component';
import { ConfirmationComponent } from './book-appointment/confirmation/confirmation.component';
import { SelectAStoreComponent } from './book-appointment/select-a-store/select-a-store.component';
import { YourDetailsComponent } from './book-appointment/your-details/your-details.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', redirectTo:'bookAppointment/chooseDate', pathMatch: 'full'},
    { path: 'bookAppointment', component: BookAppointmentComponent, children:[
    { path: '', component: SelectAStoreComponent },
    { path: 'selectStore', component: SelectAStoreComponent },
    { path: 'chooseDate', component: ChooseDateTimeComponent },
    { path: 'details', component: YourDetailsComponent },
    { path: 'confirmation', component: ConfirmationComponent }
  ]},
  { path: 'step2', component: BookAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
