import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipmentStatus } from 'src/app/enums/EquipmentStatus';
import { Equipment } from 'src/app/model/Equipment';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-show-equipment ',
  templateUrl: './show-equipment.component.html',
  styleUrls: ['./show-equipment.component.css']
})
export class ShowEquipmentComponent implements OnInit {
  equipmentList:Equipment[]=[]

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {

    this.fetchEquipmentById()
   
  }
 fetchEquipmentById(){
  this.service.fetchAllEquipment().subscribe((res:Equipment[])=>
    this.equipmentList=res
  )
 }

delete(equipmentId:number){
  this.service.deleteEquipment(equipmentId).subscribe()
}
update(equipmentId: number): void {
  this.router.navigate(['/edit-equipment', equipmentId]);
}
}
