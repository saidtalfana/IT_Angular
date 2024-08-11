import { Equipment } from "./Equipment";
import { Person } from "./Person";

export interface Admin extends Person{
    
    equipment: Equipment[];
  }

 