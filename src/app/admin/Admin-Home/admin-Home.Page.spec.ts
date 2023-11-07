import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomePage } from './admin-Home.Page';

describe('AdminHomePage', () => {
  let component: AdminHomePage;
  let fixture: ComponentFixture<AdminHomePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHomePage]
    });
    fixture = TestBed.createComponent(AdminHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
