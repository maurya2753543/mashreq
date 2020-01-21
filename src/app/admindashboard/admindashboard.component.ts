import { Component, OnInit , Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SubmissionService } from '../submission.service';

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

  constructor(public dialog: MatDialog ,  private dataService: SubmissionService, ) {
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

  getValue() {

      this.dataService.getData( 'index/getindex' ).subscribe((res) => {
      this.database = res;

    });
  }



}
