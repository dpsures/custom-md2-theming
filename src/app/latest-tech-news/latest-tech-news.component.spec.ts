import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTechNewsComponent } from './latest-tech-news.component';

describe('LatestTechNewsComponent', () => {
  let component: LatestTechNewsComponent;
  let fixture: ComponentFixture<LatestTechNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestTechNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTechNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
