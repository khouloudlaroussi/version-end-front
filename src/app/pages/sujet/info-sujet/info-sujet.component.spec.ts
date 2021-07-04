import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSujetComponent } from './info-sujet.component';

describe('InfoSujetComponent', () => {
  let component: InfoSujetComponent;
  let fixture: ComponentFixture<InfoSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
