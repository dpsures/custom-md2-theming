import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleHomeComponent } from './module-home.component';

describe('ModuleHomeComponent', () => {
  let component: ModuleHomeComponent;
  let fixture: ComponentFixture<ModuleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
