import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-validator',
  templateUrl: './ticket-validator.component.html',
  styleUrls: ['./ticket-validator.component.css']
})
export class TicketValidatorComponent {
  ticketCode: string = '';

  constructor(private ticketService: TicketService) {}

  validateTicket(): void {
    this.ticketService.validateTicket(this.ticketCode).subscribe(
      (response) => {
        alert(response);
      },
      (error) => {
        alert('Error al validar el ticket: ' + error.message);
      }
    );
  }

  handleQrCodeResult(resultString: string): void {
    this.ticketCode = resultString; // Asigna el resultado a ticketCode
    this.validateTicket(); // Llama automáticamente a validar el ticket
  }
}
