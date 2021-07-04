import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfTecnsComponent } from './inf-tecns.component';

describe('InfTecnsComponent', () => {
  let component: InfTecnsComponent;
  let fixture: ComponentFixture<InfTecnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfTecnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfTecnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
