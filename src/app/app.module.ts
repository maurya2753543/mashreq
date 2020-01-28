import { BrowserModule } from '@angular/platform-browser';
import { NgModule, RootRenderer } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CreateformComponent } from './createform/createform.component';
import { MaterialModule } from './material.module';
import {DialogComponent} from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubCreateformComponent } from './createform/sub-createform/sub-createform.component';
import {SubmissionService} from './submission.service';


@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    CreateformComponent,
    HeaderComponent,
    DialogComponent,
    SubCreateformComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],

  providers: [SubmissionService ] ,
  entryComponents: [DialogComponent, CreateformComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
