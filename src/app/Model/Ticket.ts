import { Time } from "@angular/common";
import { Equipment } from "./Equipment";
import { Failure } from "./Failure";
import { Technician } from "./Technician";
import { User } from "./User";
import { TicketStatus } from "../enums/TicketStatus";

export interface Ticket {
    ticketId: number;
    date: Date;
    time: Time; 
    description: string;
    ticketStatus: TicketStatus;

    user: User;
    failure : Failure;
    technician : Technician;
    equipement : Equipment
    
  }

  



 
