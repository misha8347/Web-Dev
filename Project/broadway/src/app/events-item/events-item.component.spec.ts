import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsItemComponent } from './events-item.component';

describe('EventsItemComponent', () => {
  let component: EventsItemComponent;
  let fixture: ComponentFixture<EventsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
