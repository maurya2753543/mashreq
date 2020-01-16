import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';
import {CreateformComponent} from './createform/createform.component';
import {HeaderComponent} from './header/header.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path : '' , redirectTo : 'dashboard', pathMatch : 'full' },
  { path : 'dashboard' , component: AdmindashboardComponent },
  { path : 'form' , component: CreateformComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
