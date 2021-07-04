import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtatTacheComponent } from './update-etat-tache.component';

describe('UpdateEtatTacheComponent', () => {
  let component: UpdateEtatTacheComponent;
  let fixture: ComponentFixture<UpdateEtatTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEtatTacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEtatTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
