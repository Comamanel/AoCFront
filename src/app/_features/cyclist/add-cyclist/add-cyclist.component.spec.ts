import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCyclistComponent } from './add-cyclist.component';

describe('AddCyclistComponent', () => {
  let component: AddCyclistComponent;
  let fixture: ComponentFixture<AddCyclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCyclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCyclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
