import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateTacheComponent } from './add-update-tache.component';

describe('AddUpdateTacheComponent', () => {
  let component: AddUpdateTacheComponent;
  let fixture: ComponentFixture<AddUpdateTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
