import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTecComponent } from './liste-tec.component';

describe('ListeTecComponent', () => {
  let component: ListeTecComponent;
  let fixture: ComponentFixture<ListeTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
