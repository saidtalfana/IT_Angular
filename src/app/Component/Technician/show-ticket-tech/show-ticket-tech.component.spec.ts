import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTicketTechComponent } from './show-ticket-tech.component';

describe('ShowTicketTechComponent', () => {
  let component: ShowTicketTechComponent;
  let fixture: ComponentFixture<ShowTicketTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTicketTechComponent]
    });
    fixture = TestBed.createComponent(ShowTicketTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
