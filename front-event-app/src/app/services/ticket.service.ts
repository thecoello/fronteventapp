import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:8080/api/tickets'; // Ajusta esto a la URL base de tu backend

  constructor(private http: HttpClient) { }

  validateTicket(ticketCode: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Asegúrate de enviar el ticketCode en el formato que espera tu backend.
    // Si tu backend espera un objeto JSON, puedes necesitar ajustar cómo se envía.
    return this.http.post(`${this.baseUrl}/validate`, ticketCode, { headers: headers, responseType: 'text' });
  }
}