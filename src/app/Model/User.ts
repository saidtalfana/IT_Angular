import { Equipment } from "./Equipment";
import { Person } from "./Person";
import { Ticket } from "./Ticket";

export interface User  extends Person {
    
    
    tickets: Ticket[];
    equipments:Equipment[]
  }
