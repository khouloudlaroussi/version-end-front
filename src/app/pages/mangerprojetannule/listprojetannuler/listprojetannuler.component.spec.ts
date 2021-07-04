import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojetannulerComponent } from './listprojetannuler.component';

describe('ListprojetannulerComponent', () => {
  let component: ListprojetannulerComponent;
  let fixture: ComponentFixture<ListprojetannulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListprojetannulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprojetannulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
