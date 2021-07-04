import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfiremComponent } from './delete-confirem.component';

describe('DeleteConfiremComponent', () => {
  let component: DeleteConfiremComponent;
  let fixture: ComponentFixture<DeleteConfiremComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConfiremComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfiremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
