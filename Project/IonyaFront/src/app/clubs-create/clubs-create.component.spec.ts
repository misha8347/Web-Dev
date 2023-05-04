import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsCreateComponent } from './clubs-create.component';

describe('ClubsCreateComponent', () => {
  let component: ClubsCreateComponent;
  let fixture: ComponentFixture<ClubsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
