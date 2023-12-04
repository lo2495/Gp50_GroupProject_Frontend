import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { FormControl, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
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
import { DatePipe } from '@angular/common';
import { UserService } from 'src/app/shared/user.service.service';
import { UserData } from 'src/app/Model/UserInterface';

@Component({
  selector: 'addClass-dialog-component',
  templateUrl: './addClass-dialog.component.html',
  styleUrls: ['./addClass-dialog.component.scss'],
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
    ReactiveFormsModule
  ], providers: [DatePipe]
})

export class AddClassDialogComponent {
  @Output() dialogClosed = new EventEmitter<string>();
  constructor(public dialogRef: MatDialogRef<AddClassDialogComponent>,
    private databaseService: DatabaseService,
    private datePipe: DatePipe,
    private userService: UserService) { }
    userData: UserData | undefined;
  userName!: string;
  Class: any = {};
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') ?? '';
    if (!this.userName) {
      this.userData = this.userService.getUserData();
      this.userName = this.userData!.Name;
      localStorage.setItem('userName', this.userName);
    }
  }
  addClass() {
    const formattedDate = this.datePipe.transform(
      this.Class.ClassDate,
      'yyyy-MM-dd'
    );
    this.Class.ClassDate = formattedDate;

    this.databaseService.insertClass(this.Class, this.userName).subscribe(
      (response) => {
        console.log('Class added successfully');
        this.dialogRef.close();
        location.reload();
      },
      (error) => {
        console.error('Error adding Class:', error);
      }
    );
  }
  closeDialog() {
    this.dialogRef.close();
  }

}