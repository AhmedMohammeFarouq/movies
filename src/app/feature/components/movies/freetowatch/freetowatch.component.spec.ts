import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetowatchComponent } from './freetowatch.component';

describe('FreetowatchComponent', () => {
  let component: FreetowatchComponent;
  let fixture: ComponentFixture<FreetowatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreetowatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreetowatchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
