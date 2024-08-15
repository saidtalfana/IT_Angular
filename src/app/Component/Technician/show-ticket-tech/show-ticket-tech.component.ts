import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-show-ticket-tech',
  templateUrl: './show-ticket-tech.component.html',
  styleUrls: ['./show-ticket-tech.component.css']
})
export class ShowTicketTechComponent implements OnInit {
  
  listTicket: Ticket[] = [];
  technicianId!: number

  constructor(private router:Router,private service: ServiceService) {}

  ngOnInit(): void {
    this.fetchId()
    this.fetchAllTicketsByTech();

  }

  fetchId(){
    const token = localStorage.getItem("jwt");

       if(token){
        try{
          const decodedToken: any = jwtDecode(token);
          this.technicianId = decodedToken.id;
          
        }
        catch (error) {
          console.error('Failed to decode JWT:', error);
        }
  
       }
  }
    

  fetchAllTicketsByTech() {
    this.service.fetchTicketByTechnicianId(this.technicianId).subscribe((res: Ticket[]) => {       
      this.listTicket = res
      console.log(res);
      
    });
  }


  update(ticketId : number):void{
    this.router.navigate(['/ticket_id',ticketId])
    
  }
  
}
