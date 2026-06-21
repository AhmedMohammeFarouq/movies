import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTrailersComponent } from './latest-trailers.component';

describe('LatestTrailersComponent', () => {
  let component: LatestTrailersComponent;
  let fixture: ComponentFixture<LatestTrailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestTrailersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestTrailersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
