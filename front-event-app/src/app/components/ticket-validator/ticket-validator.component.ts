import { Component } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-validator',
  templateUrl: './ticket-validator.component.html',
  styleUrls: ['./ticket-validator.component.css']
})
export class TicketValidatorComponent {
  ticketCode: string = '';

  constructor(private ticketService: TicketService) { }

  validateTicket(): void {
    if (!this.ticketCode) {
      alert('Por favor, ingresa un código de ticket.');
      return;
    }
    this.ticketService.validateTicket(this.ticketCode).subscribe(
      (response) => {
        alert(response);
      },
      (error) => {
        alert('Error al validar el ticket: ' + error.message);
      }
    );
  }
}
