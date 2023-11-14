import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'DeleteConfirm-dialog-component',
    templateUrl: './DeleteConfirm-dialog.component.html',
    styleUrls: ['./DeleteConfirm-dialog.component.scss'],
    standalone: true,
    imports: [
        MatDialogModule,
        MatButtonModule
    ]
})

export class DeleteConfirmDialogComponent{
    constructor(public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>){}
}