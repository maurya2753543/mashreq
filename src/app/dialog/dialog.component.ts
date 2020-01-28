import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatSnackBar} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmissionService } from '../submission.service';
export interface DialogData {
  formData: any;
  name: string;
  keytype: string;
  alterEgo?: string;
  id: number;
  action: any;

}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

        public submitted = false;




  constructor( public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,

               private router: Router,
               private snackBar: MatSnackBar
  )  { }

  ngOnInit() {

  }
   onSubmit() {

    this.submitted = true;


   }
  cancel(): void {
    this.dialogRef.close('close');
  }


}
