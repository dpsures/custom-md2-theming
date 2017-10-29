import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMgmtComponent } from './learning-mgmt.component';

describe('LearningMgmtComponent', () => {
  let component: LearningMgmtComponent;
  let fixture: ComponentFixture<LearningMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
