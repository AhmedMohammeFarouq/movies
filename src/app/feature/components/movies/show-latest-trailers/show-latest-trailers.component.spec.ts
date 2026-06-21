import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLatestTrailersComponent } from './show-latest-trailers.component';

describe('ShowLatestTrailersComponent', () => {
  let component: ShowLatestTrailersComponent;
  let fixture: ComponentFixture<ShowLatestTrailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLatestTrailersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLatestTrailersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
