import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';
import {jwtDecode}  from 'jwt-decode';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  formTicket!:FormGroup
  user_id!:number
  constructor(private service:ServiceService,private fp:FormBuilder){

  }

  ngOnInit(): void {
    this.addTicket() 
    this.setUserIdFromToken() 
  }

addTicket(){
  this.formTicket = this.fp.group({
    description:["",Validators.required],
    ticketStatus:["",Validators.required],
    user_id:[""],
    failureId:["",Validators.required],
    equipmentId:["",Validators.required]
  })
}

setUserIdFromToken(){
  const token = localStorage.getItem("jwt");
     if(token){
      try{
        const decodedToken: any = jwtDecode(token);
        this.user_id = decodedToken.id;
      }
      catch (error) {
        console.error('Failed to decode JWT:', error);
      }

     }
}


onSubmit(){
  const value:Ticket=this.formTicket.value
  const equipmentId:number=this.formTicket.value.equipmentId   
  const failureId:number=this.formTicket.value.failureId  

  console.log(equipmentId)  
  console.log(failureId)  
  if(value){
    this.service.addTicket(value,equipmentId,failureId,this.user_id).subscribe()
  }
  else
  console.log("ticket was not sent to admin")

  this.addTicket();
}
}
