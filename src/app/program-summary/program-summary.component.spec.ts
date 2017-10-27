import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSummaryComponent } from './program-summary.component';

describe('ProgramSummaryComponent', () => {
  let component: ProgramSummaryComponent;
  let fixture: ComponentFixture<ProgramSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
