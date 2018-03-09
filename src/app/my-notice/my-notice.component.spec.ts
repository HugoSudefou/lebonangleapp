import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNoticeComponent } from './my-notice.component';

describe('MyNoticeComponent', () => {
  let component: MyNoticeComponent;
  let fixture: ComponentFixture<MyNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
