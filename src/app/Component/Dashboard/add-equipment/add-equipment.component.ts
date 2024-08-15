import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipment } from 'src/app/model/Equipment';
import { User } from 'src/app/model/User';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  formAdd!: FormGroup;

  equipmentId?: number;

  userList!:User[]


  constructor(private service: ServiceService, private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      equipmentStatus: ['', Validators.required],
      userId: ['', Validators.required],
    });
    this.route.params.subscribe(params => {
      this.equipmentId = +params['id'];
      if (this.equipmentId) {
        this.loadEquipment();
      }
    })
    this.allUsers()
  }

  loadEquipment(): void {
    this.service.getEquipment(this.equipmentId!).subscribe(
      (equipment: Equipment) => {
        this.formAdd.patchValue(equipment);
      },
      error => {
        console.error('Error fetching equipment', error);
      }
    );
  }

allUsers(){
  this.service.fetchAllUsers().subscribe((res:User[])=>{
    this.userList = res
  })
}

  onSubmit(): void {
    if (this.formAdd.valid) {
      const formValue = this.formAdd.value;
      const equipmentId:number | undefined = this.equipmentId; 
      const userId : number = this.formAdd.value.userId
        console.log(userId);
        
      if (equipmentId) {
        this.service.updateEquipment( formValue,equipmentId, userId).subscribe(
          response => {
            console.log('Equipment updated successfully', response);
            this.router.navigate(['/show-equipment']); 
          },
          error => {
            console.error('Error updating equipment', error);
          }
        );
      } else {
        this.service.AddEquipment(formValue, userId).subscribe(
          response => {
            console.log('Equipment added successfully', response);
            this.router.navigate(['/show-equipment']); 
          },
          error => {
            console.error('Error adding equipment', error);
          }
        );
      }
  
      this.formAdd.reset(); 
    } else {
      console.log('Form is invalid');
    }
  }
  
}


