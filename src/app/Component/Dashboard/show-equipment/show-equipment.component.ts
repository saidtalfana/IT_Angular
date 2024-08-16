import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from 'src/app/model/Equipment';
import { ServiceService } from 'src/app/service/service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-equipment',
  templateUrl: './show-equipment.component.html',
  styleUrls: ['./show-equipment.component.css']
})
export class ShowEquipmentComponent implements OnInit {
  equipmentList: MatTableDataSource<Equipment> = new MatTableDataSource<Equipment>();
  columnEquipment: string[] = ["id", "name", "description", "type", "equipmentStatus"];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fetchEquipmentById();
  }

  fetchEquipmentById(): void {
    this.service.fetchAllEquipment().subscribe((res: Equipment[]) => {
      this.equipmentList.data = res;
    });
  }

  delete(equipmentId: number): void {
    this.service.deleteEquipment(equipmentId).subscribe(() => {
      // Refresh the list after deletion
      this.fetchEquipmentById();
    });
  }

  update(equipmentId: number): void {
    this.router.navigate(['/edit-equipment', equipmentId]);
  }
}
