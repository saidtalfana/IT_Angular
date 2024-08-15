import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketStatus } from 'src/app/enums/TicketStatus';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-update-ticket-tech',
  templateUrl: './update-ticket-tech.component.html',
  styleUrls: ['./update-ticket-tech.component.css']
})
export class UpdateTicketTechComponent implements OnInit {
 
  formUpdate!:FormGroup
  tickets!:Ticket[]
  ticketId!:number

  constructor(private service:ServiceService,private route:ActivatedRoute,
    private fb:FormBuilder
  ){

  }

  ngOnInit(): void {
    this.formUpdate=this.fb.group({
      description:[""],
      ticketStatus:[""],
      user_id:[""],
      failureId:[""],
      equipmentId:[]

    })
    this.getTecketId()
    console.log(this.getTecketId());
    this.fetchTicketById()
    
  }

  getTecketId(){
    this.route.params.subscribe(param =>{
      this.ticketId = +param ['id']
      console.log(this.ticketId);
      
    }
    )
  }


  


  fetchTicketById(){
    
    this.service.fetchTicket(this.ticketId).subscribe((res:Ticket)=>{
    this.tickets = [res]
    })
  }

  onSubmit(){
    const ticket= this.formUpdate.value
    console.log(ticket);
    
    
   this.service.updateTicketByTechnician(ticket,this.ticketId).subscribe()
   this.formUpdate.reset
  }

}
