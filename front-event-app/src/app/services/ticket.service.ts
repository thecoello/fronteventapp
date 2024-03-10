import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://localhost:8080/api/tickets';

  constructor(private http: HttpClient) { }

  validateTicket(ticketCode: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/validate`, ticketCode, { responseType: 'text' });
  }
}
