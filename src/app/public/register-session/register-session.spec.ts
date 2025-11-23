import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSession } from './register-session';

describe('RegisterSession', () => {
  let component: RegisterSession;
  let fixture: ComponentFixture<RegisterSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSession);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
