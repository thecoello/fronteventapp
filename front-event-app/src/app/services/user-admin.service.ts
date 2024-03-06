import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs'
import { UserAdmin } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  private url: String =  "http://localhost:8080"

  constructor(private httpClient: HttpClient) {}

  postUser(body?: UserAdmin):Observable<any>{
    const headers = new HttpHeaders({'accept': 'application/json'})
    return this.httpClient.post<UserAdmin>(`${this.url}/users`,body, {headers})
  }

  forgotPassword(email?: String):Observable<any>{
    return this.httpClient.post(`${this.url}/forgot_password?email=${email}`, null ,{ observe: 'response', responseType: 'text' })
  }


}
