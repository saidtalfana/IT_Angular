import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTicketTechComponent } from './update-ticket-tech.component';

describe('UpdateTicketTechComponent', () => {
  let component: UpdateTicketTechComponent;
  let fixture: ComponentFixture<UpdateTicketTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTicketTechComponent]
    });
    fixture = TestBed.createComponent(UpdateTicketTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
