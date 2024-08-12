import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-failure',
  templateUrl: './add-failure.component.html',
  styleUrls: ['./add-failure.component.css']
})
export class AddFailureComponent implements OnInit{

  addForm!:FormGroup;

  constructor(private service:ServiceService,private fb:FormBuilder){

  }
  ngOnInit(): void {
  this.addFailure();
  }
 addFailure(){
  this.addForm = this.fb.group({
    description:['',Validators.required],
    failureType:['',Validators.required]
  })
 }
onSubmit(){
  const value = this.addForm.value
  this.service.addFailure(value).subscribe()
  this.addForm.reset
}
 
}
