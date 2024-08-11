import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTechnicianComponent } from './show-technician.component';

describe('ShowTechnicianComponent', () => {
  let component: ShowTechnicianComponent;
  let fixture: ComponentFixture<ShowTechnicianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTechnicianComponent]
    });
    fixture = TestBed.createComponent(ShowTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
