import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-all-ticket',
  templateUrl: './all-ticket.component.html',
  styleUrls: ['./all-ticket.component.css']
})
export class AllTicketComponent implements OnInit{
  listAllTicket : Ticket[]=[]
   technician_id:number=102
  constructor(private service:ServiceService){

  }

  ngOnInit(): void {
this.fetchAllTicket()  }

  fetchAllTicket(){
    this.service.fetchAllTicket().subscribe((res:Ticket[])=>{
      this.listAllTicket=res
    })
  }

  update(id:number){
  this.service.updateTicketByAdmin(id,this.technician_id).subscribe()

  }
}
