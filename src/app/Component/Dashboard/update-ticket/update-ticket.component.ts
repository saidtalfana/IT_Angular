import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Technician } from 'src/app/model/Technician';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit{

  listTechnician!:Technician[]
  formUpdate!:FormGroup
  ticketId!:number
  technicianId!:number
  formUpdateAdmin!:FormGroup
  constructor(private service:ServiceService,private fb:FormBuilder,
    private route: ActivatedRoute,
  ){
    
  }
  ngOnInit(): void {
    this.getTechicians()
     this.getId()
    
    this.formUpdateAdmin = this.fb.group({
      technicianId: [''],
    });    
  }

  

getId(){
  this.route.params.subscribe(params => {
    this.ticketId = +params['id']; })
}

onSubmit(){
   const technician_id= this.formUpdateAdmin.value.technicianId
   console.log(technician_id);
   
   
  this.service.updateTicketByAdmin(this.ticketId,technician_id).subscribe()
  }

  getTechicians(){
  this.service.fetchAllTechnician().subscribe((res:Technician[])=>{
    this.listTechnician = res
  })
}
}
