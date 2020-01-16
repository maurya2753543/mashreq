import { Component, OnInit , Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {


  name: string;

  database: any;

  constructor(public dialog: MatDialog ) {
     this.database = [

      { id : 0 , name : 'Database'},
      { id : 1 , name : 'Mashreq'},
      { id : 2 , name : 'Puresoftware'},
      { id : 3 , name : 'KMS Data'}
     ];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  ngOnInit() {
  }

}
