import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorEditComponent } from './supervisor-edit.component';

describe('SupervisorEditComponent', () => {
  let component: SupervisorEditComponent;
  let fixture: ComponentFixture<SupervisorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
