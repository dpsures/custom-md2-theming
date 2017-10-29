import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSummaryComponent } from './module-summary.component';

describe('ModuleSummaryComponent', () => {
  let component: ModuleSummaryComponent;
  let fixture: ComponentFixture<ModuleSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
