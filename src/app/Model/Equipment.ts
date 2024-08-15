import { EquipmentStatus } from "../enums/EquipmentStatus";
import { Admin } from "./Admin";
import { Failure } from "./Failure";
import { Ticket } from "./Ticket";
import { User } from "./User";

export interface Equipment {
    equipmentId: number;
    name: string;
    description: string; 
    type: string;
    equipmentStatus: EquipmentStatus;
    admin:Admin;
    ticket:Ticket[];
    user:User;
    failures:Failure[]

  }
