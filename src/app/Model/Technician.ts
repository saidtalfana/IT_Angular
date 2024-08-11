import { Person } from "./Person";
import { Ticket } from "./Ticket";

export interface Technician extends Person{
    

    tickets:Ticket[];
  }

 