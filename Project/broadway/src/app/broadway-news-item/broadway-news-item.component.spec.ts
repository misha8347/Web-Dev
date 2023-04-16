import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadwayNewsItemComponent } from './broadway-news-item.component';

describe('BroadwayNewsItemComponent', () => {
  let component: BroadwayNewsItemComponent;
  let fixture: ComponentFixture<BroadwayNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadwayNewsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadwayNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
