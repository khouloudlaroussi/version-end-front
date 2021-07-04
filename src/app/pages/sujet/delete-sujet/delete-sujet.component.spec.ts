import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSujetComponent } from './delete-sujet.component';

describe('DeleteSujetComponent', () => {
  let component: DeleteSujetComponent;
  let fixture: ComponentFixture<DeleteSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
