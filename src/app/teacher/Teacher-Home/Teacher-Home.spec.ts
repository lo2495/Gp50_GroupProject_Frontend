import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeacherHome } from './Teacher-Home';


describe('TeacherHome', () => {
  let component: TeacherHome;
  let fixture: ComponentFixture<TeacherHome>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherHome]
    });
    fixture = TestBed.createComponent(TeacherHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
