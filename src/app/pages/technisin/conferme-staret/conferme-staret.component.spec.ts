import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermeStaretComponent } from './conferme-staret.component';

describe('ConfermeStaretComponent', () => {
  let component: ConfermeStaretComponent;
  let fixture: ComponentFixture<ConfermeStaretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfermeStaretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfermeStaretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
