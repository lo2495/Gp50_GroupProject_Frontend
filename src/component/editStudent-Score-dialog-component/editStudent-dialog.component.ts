import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { DatabaseService } from 'src/service/DataBaseService';
import { DatePipe } from '@angular/common';

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
        MatRadioModule
    ],providers: [DatePipe]
})

export class EditStudentDialogComponent {
    @Output() dialogClosed = new EventEmitter<string>();
    constructor(public dialogRef: MatDialogRef<EditStudentDialogComponent>,
        private databaseService: DatabaseService,
        private datePipe: DatePipe) { }
    student: any = {};
    editStudent() {
        const formattedDate = this.datePipe.transform(
            this.student.BirthDate,
            'yyyy-MM-dd'
          );
          this.student.BirthDate = formattedDate;
      
          this.databaseService.ChangeScores(this.student).subscribe(
            (response) => {
              console.log('student editted successfully');
              this.dialogRef.close();
              location.reload();
            },
            (error) => {
              console.error('Error editting student:', error);
            }
          );
    }
    closeDialog() {
    this.dialogRef.close();
  }
}