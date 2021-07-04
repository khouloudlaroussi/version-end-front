import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateSujetComponent } from './add-update-sujet.component';

describe('AddUpdateSujetComponent', () => {
  let component: AddUpdateSujetComponent;
  let fixture: ComponentFixture<AddUpdateSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
