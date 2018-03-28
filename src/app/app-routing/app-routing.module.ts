import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// Components
import { LoginComponent } from '../components/login/login.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { TodoEditComponent } from '../components/todo-edit/todo-edit.component';
import { TodoAddComponent } from '../components/todo-add/todo-add.component';

import { AuthGuard } from "../guard/auth.guard";
import { RegistrationComponent } from "../components/registration/registration.component";
import { TodoDelComponent } from "../components/todo-del/todo-del.component";
import { SetingsComponent } from "../components/setings/setings.component";

const  routes: Routes = [
  { path: '', component: TodoListComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'setings', component: SetingsComponent, canActivate: [ AuthGuard ] },
  { path: 'add', component: TodoAddComponent, canActivate: [ AuthGuard ] },
  { path: 'edit/:id', component: TodoEditComponent, canActivate: [ AuthGuard ] },
  { path: 'del/:id', component: TodoDelComponent, canActivate: [ AuthGuard ] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
