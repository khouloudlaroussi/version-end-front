import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateTecComponent } from './add-update-tec.component';

describe('AddUpdateTecComponent', () => {
  let component: AddUpdateTecComponent;
  let fixture: ComponentFixture<AddUpdateTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
