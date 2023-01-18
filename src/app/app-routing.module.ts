import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { AddsubjectComponent } from './components/addsubject/addsubject.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';
import { ViewsubjectComponent } from './components/viewsubject/viewsubject.component';

const routes: Routes = [
  { path: '', component: ViewstudentComponent },
  { path: 'student/all', component: ViewstudentComponent },
  { path: 'student/add', component: AddstudentComponent },
  { path: 'subject/all', component: ViewsubjectComponent },
  { path: 'subject/add', component: AddsubjectComponent },
  //{ path: 'update/:id', component: UpdateuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
