import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTacheComponent } from './info-tache.component';

describe('InfoTacheComponent', () => {
  let component: InfoTacheComponent;
  let fixture: ComponentFixture<InfoTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
