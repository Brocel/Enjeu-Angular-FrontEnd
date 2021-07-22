import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_API = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(
   firstName: string,
   lastName: string,
   userName: string,
   email: string,
   age: number,
   country: string,
   state: string,
   city: string,
   password: string): Observable<any> {
     return this.http.post(URL_API + 'users', {
       firstName,
       lastName,
       userName,
       email,
       age,
       country,
       state,
       city,
       password
     }, httpOptions);
   }
}
