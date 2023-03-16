import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';  
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL = "http://localhost:37466/api/Users/";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
  
    return this.httpClient.get(this.apiURL + 'AllUsers/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(user:Users): Observable<any> {
  
    return this.httpClient.post(this.apiURL + 'SignUp/', JSON.stringify(user), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  


  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.apiURL + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
    

  update(id:number, user:Users): Observable<any> {
  
    return this.httpClient.put(this.apiURL+ id , JSON.stringify(user), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.apiURL + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
      
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
