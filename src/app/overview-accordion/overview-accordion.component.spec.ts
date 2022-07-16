import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAccordionComponent } from './overview-accordion.component';

describe('OverviewAccordionComponent', () => {
  let component: OverviewAccordionComponent;
  let fixture: ComponentFixture<OverviewAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
