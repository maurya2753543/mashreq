import { NgModule } from '@angular/core';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';


const MaterialComponent = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatExpansionModule,
  MatDialogModule,
  MatSelectModule,
  MatTreeModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSnackBarModule,
  ReactiveFormsModule,
  MatCheckboxModule


];

@NgModule({
  declarations: [],

  imports: MaterialComponent,
  exports: MaterialComponent

})
export class MaterialModule { }
