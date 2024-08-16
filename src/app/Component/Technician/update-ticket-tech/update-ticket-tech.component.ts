import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/model/Ticket';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-update-ticket-tech',
  templateUrl: './update-ticket-tech.component.html',
  styleUrls: ['./update-ticket-tech.component.css']
})
export class UpdateTicketTechComponent implements OnInit {

  formUpdate!: FormGroup;
  tickets: Ticket[] = [];
  ticketId!: number;

  constructor(
    private service: ServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTicketId();
    this.fetchTicketById();
    this.formUpdate = this.fb.group({
      description: [""],
      ticketStatus: ["", Validators.required],
      user_id: [""],
      failureId: [""],
      equipmentId: [""]
    });
  }

  getTicketId(): void {
    this.route.params.subscribe(params => {
      this.ticketId = +params['id'];
      console.log(this.ticketId);
    });
  }

  fetchTicketById(): void {
    this.service.fetchTicket(this.ticketId).subscribe((res: Ticket) => {
      this.tickets = [res];
      // Populate form with ticket data
      this.formUpdate.patchValue(res);
    });
  }

  onSubmit(): void {
    if (this.formUpdate.invalid) {
      return;
    }

    const ticket = this.formUpdate.value;
    console.log(ticket);

    this.service.updateTicketByTechnician(ticket, this.ticketId).subscribe(
      response => {
        console.log('Update successful', response);
        // Redirect after successful update
        this.router.navigate(['/success-page']); // Update with your desired route
      },
      error => {
        console.error('Update failed', error);
      }
    );

    // Reset the form
    this.formUpdate.reset();
  }
}
