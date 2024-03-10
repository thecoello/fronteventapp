import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-validator',
  templateUrl: './ticket-validator.component.html',
  styleUrls: ['./ticket-validator.component.scss']
})
export class TicketValidatorComponent {
  ticketCode: string = ''; 

  constructor(private ticketService: TicketService) {}

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

  handleQrCodeResult(resultString: string): void {
    this.ticketCode = resultString;
    this.validateTicket();
  }
}
