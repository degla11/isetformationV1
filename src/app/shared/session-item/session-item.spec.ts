import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionItem } from './session-item';

describe('SessionItem', () => {
  let component: SessionItem;
  let fixture: ComponentFixture<SessionItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
