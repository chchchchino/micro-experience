import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { BorrowerListComponent } from './borrower-list/borrower-list.component';  
import { AddBorrowerComponent } from './add-borrower/add-borrower.component';  
  
const routes: Routes = [  
  { path: '', redirectTo: 'view-borrower', pathMatch: 'full' },  
  { path: 'view-borrower', component: BorrowerListComponent },  
  { path: 'add-borrower', component: AddBorrowerComponent },  
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  