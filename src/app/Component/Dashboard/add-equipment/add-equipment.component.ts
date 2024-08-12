import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  formAdd!: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      type: ['', Validators.required],
      equipmentStatus: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }
  onSubmit(): void {
    if (this.formAdd.valid) {
      const newEquipme: any = this.formAdd.value;
      const userId: number = Number(newEquipme.userId); // Convert to number if needed
      this.service.AddEquipment(newEquipme, userId).subscribe(
        response => {
          console.log('Equipment added successfully', response);
        },
        error => {
          console.error('Error adding equipment', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  
    this.formAdd.reset(); // Reset the form after submission
  }
  
}
