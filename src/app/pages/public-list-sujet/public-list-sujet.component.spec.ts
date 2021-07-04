import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicListSujetComponent } from './public-list-sujet.component';

describe('PublicListSujetComponent', () => {
  let component: PublicListSujetComponent;
  let fixture: ComponentFixture<PublicListSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicListSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicListSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
