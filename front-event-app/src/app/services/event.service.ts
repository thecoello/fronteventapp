import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8080/events';

  constructor(private http: HttpClient) { }

  getEventList(): Observable<any> {
    return this.http.get<Array<Event>>(`${this.baseUrl}`);
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/${id}`);
  }

  createEvent(body: FormData): Observable<any> {
    const headers = new HttpHeaders({'Accept':'*/*'})
    return this.http.post(`${this.baseUrl}`, body, {headers});
  }

  updateEvent(id: number, body: FormData): Observable<any> {
    const headers = new HttpHeaders({'Accept':'*/*'})
    return this.http.put(`${this.baseUrl}/${id}`, body,{headers});
  }

  deleteEvent(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
