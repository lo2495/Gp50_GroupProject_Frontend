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
    selector: 'addteacher-dialog-component',
    templateUrl: './addteacher-dialog.component.html',
    styleUrls: ['./addteacher-dialog.component.scss'],
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

export class AddTeacherDialogComponent {
    @Output() dialogClosed = new EventEmitter<string>();
    constructor(public dialogRef: MatDialogRef<AddTeacherDialogComponent>,
        private databaseService: DatabaseService,
        private datePipe: DatePipe) { }
    teacher: any = {};
    addTeacher() {
        const formattedDate = this.datePipe.transform(
            this.teacher.dateOfEmployment,
            'yyyy-MM-dd'
          );
          this.teacher.dateOfEmployment = formattedDate;
      
          this.databaseService.insertTeacher(this.teacher).subscribe(
            (response) => {
              console.log('Teacher added successfully');
              this.dialogRef.close();
              location.reload();
            },
            (error) => {
              console.error('Error adding teacher:', error);
            }
          );
    }
    closeDialog() {
    this.dialogRef.close();
  }
}