import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheCharetComponent } from './tache-charet.component';

describe('TacheCharetComponent', () => {
  let component: TacheCharetComponent;
  let fixture: ComponentFixture<TacheCharetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheCharetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheCharetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
