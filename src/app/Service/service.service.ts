import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpRequest } from '../dto/SignUpRequest';
import { Person } from '../model/Person';
import { LoginRequest } from '../dto/LoginRequest';
import { FailureDto } from '../dto/FailureDto';

import { Ticket } from '../model/Ticket';
import { Role } from '../enums/Role';
import { User } from '../model/User';
import { Technician } from '../model/Technician';
import { Equipment } from '../model/Equipment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  private       API_USER = 'http://localhost:8080/api/user';
  private API_TECHNICIAN = 'http://localhost:8080/api/technician';
  private API_EQUIPEMENT = 'http://localhost:8080/api/equipment';
  private    API_FAILURE = 'http://localhost:8080/api/failure';

  private     API_SIGNUP = 'http://localhost:8080/signup';
  private      API_LOGIN = 'http://localhost:8080/login';

  private     API_TICKET = 'http://localhost:8080/api/ticket';



  constructor(private http:HttpClient) { }


  
  
                     //  <?--------------sign up ------------------->
                   signup(role: string, signUpRequest: SignUpRequest): Observable<any>{
                        return  this.http.post(`${this.API_SIGNUP}?role=${role}`,signUpRequest) 
                   }
                     //  <?--------------login up ------------------->
                   signin(loginRequest:LoginRequest):Observable<{ token: string, role: string }> {
                         return this.http.post<{ token: string, role: string }>(`${this.API_LOGIN}`,loginRequest)}
      //  <?----------------------------------Failure -------------------------------------->
                      //  <?--------------add failure ------------------->
                   addFailure(failureDto:FailureDto){
                         return this.http.post<FailureDto>(`${this.API_FAILURE}/add_failure`,failureDto) }
      //  <?----------------------------------User -------------------------------------->
                       //  <?--------------all users ------------------->
                    fetchAllUsers():Observable<User[]>{
                          return this.http.get<User[]>(`${this.API_USER}/get_users`)}
                       //  <?--------------delete user ------------------->
                    deleteUser(id:number):Observable<User>{
                          return this.http.delete<User>(`${this.API_USER}/delete_user/${id}`)}
                       //  <?--------------update user ------------------->
                    updateUser(user:User,id:number):Observable<User>{
                          return this.http.put<User>(`${this.API_USER}/update_user/${id}`,user)}
 //  <?----------------------------------Technician -------------------------------------->
                       //  <?--------------all technician ------------------->
                      fetchAllTechnician():Observable<Technician[]>{
                          return this.http.get<Technician[]>(`${this.API_TECHNICIAN}/all_technician`)}
                     //  <?--------------delete technician ------------------->
                      deleteTechnician(id:number):Observable<Technician>{
                           return this.http.delete<Technician>(`${this.API_TECHNICIAN}/delete_technician/${id}`)}
 //  <?----------------------------------Equipment-------------------------------------->


                     //  <?--------------add equipment ------------------->
                     AddEquipment(equipement: Equipment, user_id: number): Observable<Equipment> {
                      return this.http.post<Equipment>(`${this.API_EQUIPEMENT}/add_equipment?user_id=${user_id}`, equipement);
                    }
                    
                     //  <?--------------all equipment ------------------->
                       fetchAllEquipment():Observable<Technician[]>{
                           return this.http.get<Technician[]>(`${this.API_EQUIPEMENT}/all_equipment`)}

                      //  <?--------------delete equipment ------------------->
                        deleteEquipment(id:number):Observable<Equipment>{
                            return this.http.delete<Equipment>(`${this.API_EQUIPEMENT}/delete_equipment/${id}`)}

                       //  <?--------------update equipment ------------------->
                        updateEquipment(equipement:Equipment,id:number):Observable<Equipment>{
                          return this.http.put<Equipment>(`${this.API_EQUIPEMENT}/update_equipment/${id}`,equipement)}
                      
 //  <?----------------------------------Ticket---------------------------------------->
              //  <?--------------add ticket ------------------->
                        addTicket(ticket:Ticket,equipment_id:number,failure_id:number,user_id:number):Observable<Ticket>{
                     
                          const headers = new HttpHeaders({
                            'Content-Type': 'application/json'
                          });
                         
                           const url = `${this.API_TICKET}/add_ticket?equipment_id=${equipment_id}&failure_id=${failure_id}&user_id=${user_id}`
                           
                         return this.http.post<Ticket>(url,ticket, { headers })
              }
             //  <?--------------update ticket by admin ------------------->
             updateTicketByAdmin(ticket:Ticket,id:number,technician_id:number):Observable<Ticket>{
                    return this.http.put<Ticket>(`${this.API_TICKET}/update_ticket_admin/${id}?technician_id=${technician_id}`,ticket)}
 
                      //  <?--------------updqte ticket by technician ------------------->
             updateTicketByTechnician(ticket:Ticket,id:number):Observable<Ticket>{
              return this.http.put<Ticket>(`${this.API_TICKET}/update_ticket_technician/${id}`,ticket)}


}
