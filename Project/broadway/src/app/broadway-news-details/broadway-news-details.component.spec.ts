import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadwayNewsDetailsComponent } from './broadway-news-details.component';

describe('BroadwayNewsDetailsComponent', () => {
  let component: BroadwayNewsDetailsComponent;
  let fixture: ComponentFixture<BroadwayNewsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadwayNewsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadwayNewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
