import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangProjectComponent } from './mang-project.component';

describe('MangProjectComponent', () => {
  let component: MangProjectComponent;
  let fixture: ComponentFixture<MangProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
