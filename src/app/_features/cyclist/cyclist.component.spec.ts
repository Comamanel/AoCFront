import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistComponent } from './cyclist.component';

describe('CyclistComponent', () => {
  let component: CyclistComponent;
  let fixture: ComponentFixture<CyclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
