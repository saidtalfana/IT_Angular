import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';
import {jwtDecode}  from 'jwt-decode';
import { Failure } from 'src/app/model/Failure';
import { FailureType } from 'src/app/enums/FailureType';
import { Equipment } from 'src/app/model/Equipment';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  formTicket!:FormGroup
  user_id!:number
  failureList!:Failure[]
  equipmentList!:Equipment[]


  constructor(private service:ServiceService,private fp:FormBuilder){

  }

  ngOnInit(): void {
    this.addTicket() 
    this.setUserIdFromToken() 
    this.getFailures()
    this.getEquipmentsByUserId()
    this.setUserIdFromToken()
   }

addTicket(){
  this.formTicket = this.fp.group({
    description:["",Validators.required],
    ticketStatus:["",Validators.required],
    user_id:[""],
    failureId:[""],
    equipmentId:[]
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

getFailures(){
  this.service.getFailures().subscribe((res:Failure[])=>{
    this.failureList=res
    console.log(res)
  })
}

// ----------------get user id by local storage --------------------



getEquipmentsByUserId(){
  this.service.getEquipmentsByUserId(this.user_id).subscribe((res:Equipment[])=>{
  this.equipmentList=res
  console.log(res)

  })
    
  
}
 
   

onSubmit(){
  const value:Ticket=this.formTicket.value
  const failureId:number=this.formTicket.value.failureId  
  const equipment_id:number=this.formTicket.value.equipmentId  
  console.log(equipment_id)
  console.log(failureId)  
  if(value){
    this.service.addTicket(value,equipment_id,failureId,this.user_id).subscribe()
  }
  else
  console.log("ticket was not sent to admin")

  this.addTicket();
}






}
