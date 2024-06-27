import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
// import { StudentDetailComponent } from './student-detail/student-detail.component';
// import { StudentFormComponent } from './student-form/student-form.component';


export const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentListComponent },
  { path: 'add-student', component: StudentListComponent },
  { path: 'edit-student/:id', component: StudentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
