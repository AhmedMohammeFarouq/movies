import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmoviesComponent } from './topmovies.component';

describe('TopmoviesComponent', () => {
  let component: TopmoviesComponent;
  let fixture: ComponentFixture<TopmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopmoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopmoviesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
