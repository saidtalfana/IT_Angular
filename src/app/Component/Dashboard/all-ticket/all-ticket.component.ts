import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.css']
})
export class AllTicketComponent implements OnInit {
  listAllTicket: Ticket[] = [];
  selectedTicketId: number | null = null; // Track the currently selected ticket ID

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllTicket();
  }

  fetchAllTicket(): void {
    this.service.fetchAllTicket().subscribe((res: Ticket[]) => {
      this.listAllTicket = res;
    });
  }

  update(ticketId: number): void {
    this.selectedTicketId = this.selectedTicketId === ticketId ? null : ticketId;
  }

  closeUpdateTicket(): void {
    this.selectedTicketId = null;
  }
}
