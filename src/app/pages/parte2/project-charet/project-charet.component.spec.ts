import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCharetComponent } from './project-charet.component';

describe('ProjectCharetComponent', () => {
  let component: ProjectCharetComponent;
  let fixture: ComponentFixture<ProjectCharetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCharetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCharetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
