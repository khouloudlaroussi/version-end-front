import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAffectationComponent } from './delete-affectation.component';

describe('DeleteAffectationComponent', () => {
  let component: DeleteAffectationComponent;
  let fixture: ComponentFixture<DeleteAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
