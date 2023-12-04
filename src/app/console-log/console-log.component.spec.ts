import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleLogComponent } from './console-log.component';

describe('ConsoleLogComponent', () => {
  let component: ConsoleLogComponent;
  let fixture: ComponentFixture<ConsoleLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleLogComponent]
    });
    fixture = TestBed.createComponent(ConsoleLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
