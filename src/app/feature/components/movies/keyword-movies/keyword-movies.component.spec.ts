import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordMoviesComponent } from './keyword-movies.component';

describe('KeywordMoviesComponent', () => {
  let component: KeywordMoviesComponent;
  let fixture: ComponentFixture<KeywordMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeywordMoviesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
