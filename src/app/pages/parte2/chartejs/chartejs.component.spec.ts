import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartejsComponent } from './chartejs.component';

describe('ChartejsComponent', () => {
  let component: ChartejsComponent;
  let fixture: ComponentFixture<ChartejsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartejsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
