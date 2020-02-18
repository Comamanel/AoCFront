import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistDetailsComponent } from './cyclist-details.component';

describe('CyclistDetailsComponent', () => {
  let component: CyclistDetailsComponent;
  let fixture: ComponentFixture<CyclistDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
