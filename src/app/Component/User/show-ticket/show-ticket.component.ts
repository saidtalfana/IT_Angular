import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent implements OnInit{
  
  listTicket:Ticket[]=[]
  
  constructor(private service:ServiceService){

  }
  
  ngOnInit(): void {
  }

  fetchAllTicket(id:number){
    const user_id:number=352
   this.service.fetchTicketByUserId(user_id).subscribe((res:Ticket[])=>
  this.listTicket = res  

)}
}