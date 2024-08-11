import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/dto/LoginRequest';
import { ServiceService } from 'src/app/service/service.service';
import { Role } from 'src/app/enums/Role';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.valide();
  }

  valide() {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.formLogin.invalid) {
      return;
    }

    const loginRequest: LoginRequest = this.formLogin.value;

    this.service.signin(loginRequest).subscribe({
      next: (response) => {
        const { token, role } = response;
        localStorage.setItem('jwt', token);

        // Navigate based on user role
        switch (role) {
          case Role.ADMIN:
            this.router.navigate(['/dashboard']);
            break;
          case Role.USER:
            this.router.navigate(['/user']);
            break;
          case Role.TECHNICIAN:
            this.router.navigate(['/technician']);
            break;
          default:
            this.router.navigate(['/access-denied']);
            break;
        }
      },
      error: (err) => {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }
}
