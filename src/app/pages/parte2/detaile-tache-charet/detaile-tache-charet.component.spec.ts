import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileTacheCharetComponent } from './detaile-tache-charet.component';

describe('DetaileTacheCharetComponent', () => {
  let component: DetaileTacheCharetComponent;
  let fixture: ComponentFixture<DetaileTacheCharetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaileTacheCharetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileTacheCharetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
