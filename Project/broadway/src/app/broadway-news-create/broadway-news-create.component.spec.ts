import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadwayNewsCreateComponent } from './broadway-news-create.component';

describe('BroadwayNewsCreateComponent', () => {
  let component: BroadwayNewsCreateComponent;
  let fixture: ComponentFixture<BroadwayNewsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadwayNewsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadwayNewsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
