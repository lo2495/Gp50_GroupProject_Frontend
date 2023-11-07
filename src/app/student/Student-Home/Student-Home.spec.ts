import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentHome } from './Student-Home';



describe('StudentHome', () => {
  let component: StudentHome;
  let fixture: ComponentFixture<StudentHome>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentHome]
    });
    fixture = TestBed.createComponent(StudentHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
