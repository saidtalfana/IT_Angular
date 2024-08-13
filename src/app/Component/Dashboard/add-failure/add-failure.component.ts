import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-failure',
  templateUrl: './add-failure.component.html',
  styleUrls: ['./add-failure.component.css']
})
export class AddFailureComponent implements OnInit{

  formFailure!:FormGroup;
  constructor(private service: ServiceService, private fb: FormBuilder,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.Failure()
  }

 Failure(){
  this.formFailure = this.fb.group({
    description: ['', Validators.required],
    failureType: ['', Validators.required],

  });
 }
 onSubmit(){
  const valuer = this.formFailure.value

  this.service.addFailure(valuer).subscribe()

  this.Failure()

 }

}
