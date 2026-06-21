import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularpeopleComponent } from './popularpeople.component';

describe('PopularpeopleComponent', () => {
  let component: PopularpeopleComponent;
  let fixture: ComponentFixture<PopularpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularpeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularpeopleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
