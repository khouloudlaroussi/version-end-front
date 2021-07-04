import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileMediaComponent } from './detaile-media.component';

describe('DetaileMediaComponent', () => {
  let component: DetaileMediaComponent;
  let fixture: ComponentFixture<DetaileMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaileMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
