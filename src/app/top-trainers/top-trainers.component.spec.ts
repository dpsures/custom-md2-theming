import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrainersComponent } from './top-trainers.component';

describe('TopTrainersComponent', () => {
  let component: TopTrainersComponent;
  let fixture: ComponentFixture<TopTrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTrainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
