import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterMesTacheComponent } from './consulter-mes-tache.component';

describe('ConsulterMesTacheComponent', () => {
  let component: ConsulterMesTacheComponent;
  let fixture: ComponentFixture<ConsulterMesTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterMesTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterMesTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
