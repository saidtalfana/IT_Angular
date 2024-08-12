import { Component, OnInit } from '@angular/core';
import { EquipmentStatus } from 'src/app/enums/EquipmentStatus';
import { Equipment } from 'src/app/model/Equipment';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-show-equipment',
  templateUrl: './show-equipment.component.html',
  styleUrls: ['./show-equipment.component.css']
})
export class ShowEquipmentComponent implements OnInit {
  equipmentList:Equipment[]=[]

  constructor(private service:ServiceService) { }

  ngOnInit(): void {

    this.fetchEquipmentById()
   
  }
 fetchEquipmentById(){
  this.service.fetchAllEquipment().subscribe((res:any[])=>
    this.equipmentList=res
  )
 }
 
}
