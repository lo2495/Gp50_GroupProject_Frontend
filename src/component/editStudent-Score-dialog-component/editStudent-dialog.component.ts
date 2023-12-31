import { ChangeDetectorRef, Component, EventEmitter, Output, OnInit , Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { DatabaseService } from 'src/service/DataBaseService';
import { DatePipe , CommonModule } from '@angular/common';

@Component({
  selector: 'editStudent-dialog-component',
  templateUrl: './editStudent-dialog.component.html',
  styleUrls: ['./editStudent-dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatGridListModule,
    MatRadioModule,
    CommonModule
  ],
  providers: [DatePipe]
})

export class EditStudentDialogComponent {
  consoleLogMessages: string[] = [];
  @Output() dialogClosed = new EventEmitter<string>();
  constructor(
    public dialogRef: MatDialogRef<EditStudentDialogComponent>,
    private databaseService: DatabaseService,
    private datePipe: DatePipe,
    public cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  student: any = {
    StudentID: '',
    Grade: ''
  };


  editStudent() {
    this.databaseService.ChangeGrades(this.student).subscribe(
      (response) => {
        console.log('Student edited successfully');
        this.dialogRef.close();
        location.reload();
      },
      (error) => {
        console.error('Error editing student:', error);
      }
    );
  }
  WHATINEED: string = '';
  OUTPUT: string = this.WHATINEED;
  
  ngOnInit() : void {
   
  }
  updateStudentID() {
    const spanElement = document.getElementById("selectedStudentID");
    if (spanElement) {
      this.student.StudentID = spanElement.textContent || "";
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}