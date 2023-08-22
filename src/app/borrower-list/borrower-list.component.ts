import { Component, OnInit } from '@angular/core';  
import { BorrowerService } from '../borrower.service';  
import { Borrower } from '../borrower';  
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
  
@Component({  
  selector: 'app-borrower-list',  
  templateUrl: './borrower-list.component.html',  
  styleUrls: ['./borrower-list.component.css']  
})  
export class BorrowerListComponent implements OnInit {  
  
 constructor(private borrowerservice:BorrowerService) { }  
  
  borrowerArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  borrowers: Borrower[];  
  borrower : Borrower=new Borrower();  
  deleteMessage=false;  
  borrowerlist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.borrowerservice.getBorrowerList().subscribe(data =>{  
    this.borrowers =data;  
    this.dtTrigger.next(true);  
    })  
  }  
    
  deleteBorrower(id: number) {  
    this.borrowerservice.deleteBorrower(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.borrowerservice.getBorrowerList().subscribe(data =>{  
            this.borrowers =data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateBorrower(id: number){  
    this.isupdated=false;
    this.borrowerservice.getBorrower(id)  
      .subscribe(  
        data => {  
          this.borrowerlist=data             
        },  
        error => console.log(error));  
  }  
  
  borrowerupdateform=new FormGroup({  
    borrowerId:new FormControl(),  
    borrowerName:new FormControl(),  
    borrowerEmail:new FormControl(),  
  });  
  
  update(updstu){  
   this.borrower=new Borrower();   
   this.borrower.borrowerId=this.BorrowerId.value;  
   this.borrower.borrowerName=this.BorrowerName.value;  
   this.borrower.borrowerEmail=this.BorrowerEmail.value;  
     
  
   this.borrowerservice.updateBorrower(this.borrower.borrowerId,this.borrower).subscribe(  
    data => {       
      this.isupdated=true;  
      this.borrowerservice.getBorrowerList().subscribe(data =>{  
        this.borrowers =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get BorrowerName(){  
    return this.borrowerupdateform.get('borrowerName');  
  }  
  
  get BorrowerEmail(){  
    return this.borrowerupdateform.get('borrowerEmail');  
  }   
  
  get BorrowerId(){  
    return this.borrowerupdateform.get('borrowerId');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}  
