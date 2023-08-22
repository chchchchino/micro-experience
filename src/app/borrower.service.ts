import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class BorrowerService {  
  
  private baseUrl = 'http://localhost:8080/api/';  
  
  constructor(private http:HttpClient) { }  
  
  getBorrowerList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'borrowers');  
  }  
  
  createBorrower(borrower: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'borrowers', borrower);  
  }  
  
  deleteBorrower(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/borrowers/${id}`, { responseType: 'text' });  
  }  
  
  getBorrower(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/borrowers/${id}`);  
  }  
  
  updateBorrower(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/borrower/${id}`, value);  
  }  
    
}  
