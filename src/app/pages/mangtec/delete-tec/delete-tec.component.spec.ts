import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTecComponent } from './delete-tec.component';

describe('DeleteTecComponent', () => {
  let component: DeleteTecComponent;
  let fixture: ComponentFixture<DeleteTecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
