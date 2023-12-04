
export interface UserData {
    LoginID: string;
    password: string;
    UserRole: string;
    Name: string;
}

export interface StudentProfile extends UserData {
    studentID: string;
    Name:string;
    StudentEmail:string;
    Gender:string;
    BirthDate:Date;
    PhoneNumber:string;
    Status:string;
    Major: string;
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