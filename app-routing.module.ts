import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"contactus", component:ContactusComponent},
  {path: 'create', component: AddDepartmentComponent },
  {path: 'list', component: ListDepartmentComponent },
  {path: 'edit/:id', component: EditDepartmentComponent },
  {path: 'delete/:id', component: DeleteDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
