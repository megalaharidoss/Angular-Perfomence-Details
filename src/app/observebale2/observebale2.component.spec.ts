import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observebale2Component } from './observebale2.component';

describe('Observebale2Component', () => {
  let component: Observebale2Component;
  let fixture: ComponentFixture<Observebale2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Observebale2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Observebale2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
