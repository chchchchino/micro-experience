import { Component, OnInit } from '@angular/core';  
import { BorrowerService } from '../borrower.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Borrower } from '../borrower';  
@Component({  
  selector: 'app-add-borrower',  
  templateUrl: './add-borrower.component.html',  
  styleUrls: ['./add-borrower.component.css']  
})  
export class AddBorrowerComponent implements OnInit {  
  
  constructor(private borrowerservice:BorrowerService) { }  
  
  borrower : Borrower=new Borrower();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  borrowersaveform=new FormGroup({  
    borrowerName:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    borrowerEmail:new FormControl('',[Validators.required,Validators.email]),  
  });  
  
  saveBorrower(){  
    this.borrower=new Borrower();     
    this.borrower.borrowerName=this.BorrowerName.value;  
    this.borrower.borrowerEmail=this.BorrowerEmail.value;   
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.borrowerservice.createBorrower(this.borrower)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.borrower = new Borrower();  
  }  
  
  get BorrowerName(){  
    return this.borrowersaveform.get('borrowerName');  
  }  
  
  get BorrowerEmail(){  
    return this.borrowersaveform.get('borrowerEmail');  
  }  
  
  addBorrowerForm(){  
    this.submitted=false;  
    this.borrowersaveform.reset();  
  }  
}  