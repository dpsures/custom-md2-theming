import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningHeaderComponent } from './learning-header.component';

describe('LearningHeaderComponent', () => {
  let component: LearningHeaderComponent;
  let fixture: ComponentFixture<LearningHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
