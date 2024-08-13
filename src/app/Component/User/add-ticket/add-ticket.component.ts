import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  formTicket!:FormGroup
  constructor(private service:ServiceService,private fp:FormBuilder){

  }

  ngOnInit(): void {
    this.addTicket()  }
addTicket(){
  this.formTicket = this.fp.group({
    description:["",Validators.required],
    ticketStatus:["",Validators.required],
    user_id:[""],
    failureId:["",Validators.required],
    equipmentId:["",Validators.required]
  })
}

onSubmit(){
  const value:Ticket=this.formTicket.value
  const equipmentId:number=this.formTicket.value.equipmentId   
  const failureId:number=this.formTicket.value.failureId   
  const user_id:number=352
  console.log(equipmentId)  
  console.log(failureId)  
  console.log(user_id)  
  if(value){
    this.service.addTicket(value,equipmentId,failureId,user_id).subscribe()
  }
  else
  console.log("ticket was not sent to admin")

  this.addTicket();
}
}
