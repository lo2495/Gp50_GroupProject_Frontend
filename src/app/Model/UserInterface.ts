
export interface UserData {
    LoginID: string;
    password: string;
    UserRole: string;
    Name: string;
}
export interface CourseGrade {
    CourseName: string;
    Grade: string;
}
export interface StudentProfile extends UserData {
    StudentID: string;
    Name: string;
    StudentEmail: string;
    Gender: string;
    BirthDate: Date;
    PhoneNumber: string;
    Status: string;
    Major: string;
    Grade: { CourseName: string, Grade: string }[];
}
export interface TeacherProfile extends UserData {
    TeacherID: string;
    Name: string;
    Gender: string;
    Email: string;
    EmploymentDate: Date;
    PhoneNumber: string;
    Department: string;
    Designation: string;
}