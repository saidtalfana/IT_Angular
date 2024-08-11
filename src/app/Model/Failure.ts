import { FailureType } from "../enums/FailureType";
import { Equipment } from "./Equipment";
import { Ticket } from "./Ticket";

export interface Failure{

    failureId:number;

    failureType : FailureType;

    description : string;

    tikets : Ticket[];

    equipment : Equipment[]

}   
 
           

