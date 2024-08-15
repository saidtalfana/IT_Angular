import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.css']
})
export class AllTicketComponent implements OnInit{
  listAllTicket : Ticket[]=[]
  constructor(private service:ServiceService,private router:Router){

  }

  ngOnInit(): void {
this.fetchAllTicket()  
}

  fetchAllTicket(){
    this.service.fetchAllTicket().subscribe((res:Ticket[])=>{
      this.listAllTicket=res
    })
  }

  update(ticketId: number): void {
    this.router.navigate(['/edit-ticket', ticketId]);
  }

}
