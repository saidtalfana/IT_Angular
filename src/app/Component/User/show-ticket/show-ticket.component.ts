import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent implements OnInit {
  
  listTicket: Ticket[] = [];
  // user_id!: number | undefined
  user_id!: number

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.fetchId()
    this.fetchAllTickets();
    console.log(this.user_id);

  }

  fetchId(){
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
    

  fetchAllTickets() {
    this.service.fetchTicketByUserId(this.user_id).subscribe((res: Ticket[]) => {       
      this.listTicket = res
      console.log(res);
      
    });
  }
  
}
