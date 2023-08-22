import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import {DataTablesModule} from 'angular-datatables';  
import { BorrowerListComponent } from './borrower-list/borrower-list.component';  
import { AddBorrowerComponent } from './add-borrower/add-borrower.component';
import { BorrowerService } from './borrower.service';
  
@NgModule({  
  declarations: [  
    AppComponent,  
    BorrowerListComponent,  
    AddBorrowerComponent,  
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule  
  ],  
  providers: [BorrowerService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  