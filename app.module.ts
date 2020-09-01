import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NewCmpComponent } from './new-cmp/new-cmp.component';
// import { HomeComponent } from './home/home.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { AddDepartmentComponent } from './add-department/add-department.component';
// import { ListDepartmentComponent } from './list-department/list-department.component';
import { FormsModule } from '@angular/forms';
// import { EditDepartmentComponent } from './edit-department/edit-department.component';
// import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    // NewCmpComponent,
    // HomeComponent,
    // ContactusComponent,
    // AddDepartmentComponent,
    // ListDepartmentComponent,
    // EditDepartmentComponent,
    // DeleteDepartmentComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
