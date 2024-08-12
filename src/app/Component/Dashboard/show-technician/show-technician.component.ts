import { Component, OnInit } from '@angular/core';
import { Technician } from 'src/app/model/Technician';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-show-technician',
  templateUrl: './show-technician.component.html',
  styleUrls: ['./show-technician.component.css']
})
export class ShowTechnicianComponent implements OnInit{

  technicianList:Technician []=[]
constructor(private service:ServiceService){

}
  ngOnInit(): void {
    this.fetchAllTechnician();
  }
  fetchAllTechnician(){
   this.service.fetchAllTechnician().subscribe((res:Technician[])=>
    this.technicianList=res
   )
  }

  delete(id:number){
    this.service.deleteTechnician(id).subscribe()
  }

}
