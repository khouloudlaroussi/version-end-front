import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpAffectationComponent } from './add-up-affectation.component';

describe('AddUpAffectationComponent', () => {
  let component: AddUpAffectationComponent;
  let fixture: ComponentFixture<AddUpAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
