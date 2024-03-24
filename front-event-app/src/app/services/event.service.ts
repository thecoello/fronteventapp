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

  getEventList(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}`);
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/${id}`);
  }

  createEvent(body: FormData): Observable<Object> {
    const headers = new HttpHeaders({'Accept':'*/*'})
    return this.http.post(`${this.baseUrl}`, body, {headers});
  }

  updateEvent(id: number, event: Event): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, event);
  }

  deleteEvent(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
