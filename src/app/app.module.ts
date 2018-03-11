import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


// Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDelComponent } from './components/todo-del/todo-del.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SetingsComponent } from './components/setings/setings.component';

// Directive
import { TaskAcardionDirective } from "./task-acardion.directive";

// Modules
import { AppRoutingModule } from './app-routing/app-routing.module';

// Services
import { TodoesService } from './services/todoes.service';
import { AuthService } from './services/auth.service';
import { UidService } from "./services/uid.service";



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoEditComponent,
    NavBarComponent,
    TodoComponent,
    TodoDelComponent,
    RegistrationComponent,
    TaskAcardionDirective,
    SetingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [ TodoesService, AuthService, UidService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
