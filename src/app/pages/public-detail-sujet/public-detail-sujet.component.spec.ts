import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDetailSujetComponent } from './public-detail-sujet.component';

describe('PublicDetailSujetComponent', () => {
  let component: PublicDetailSujetComponent;
  let fixture: ComponentFixture<PublicDetailSujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicDetailSujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDetailSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
