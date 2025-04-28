import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPatientsComponent } from './last-patients.component';

describe('LastPatientsComponent', () => {
  let component: LastPatientsComponent;
  let fixture: ComponentFixture<LastPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastPatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
