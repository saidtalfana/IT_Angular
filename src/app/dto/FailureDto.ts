import { FailureType } from "../enums/FailureType";
import { Ticket } from "../model/Ticket";

export interface FailureDto{
    failureId:number;
    failureType:FailureType;
    description:string;
    tickets:Ticket[];
}