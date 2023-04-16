import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadwayNewsComponent } from './broadway-news.component';

describe('BroadwayNewsComponent', () => {
  let component: BroadwayNewsComponent;
  let fixture: ComponentFixture<BroadwayNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadwayNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadwayNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
