import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

// Services
import {TodoesService} from "../../services/todoes.service";

// Models
import { Task } from "../../models/Task";


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['../todo-add/todo-add.component.css','./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  header: string;

  @Input() headersPopup: string;
  @ViewChild("todoEditForm") form: any;

  id: string;
  createformdate: any;
  getdate: any;
  gettime: any;
  todo: Task = {
    date: '',
    id: '',
    done: false,
    header: '',
    text: '',
    time: '',
    timestamp: ''
  };

  constructor( private todoesServices: TodoesService,
               private router: Router,
               private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.todoesServices.getTodo(this.id).subscribe( todo => {
      if ( todo ) {
        this.todo = todo;
      }
    })
  }

  onSubmit() {
    if ( !this.form.valid ) {
      console.log('no validate form');

    } else {

      // получаю из ипутов дату и время и собираю в формате GMT и записываю в setTime:
      this.getdate = this.todo.date.split('-');          // от инпута с датой получаю строку и создаю масив
      this.gettime = this.todo.time.split(':'); // от инпута с временем получаю строку и создаю масив
      // собираю число в формате GMT
      this.createformdate = +(new  Date(this.getdate[0], this.getdate[1] - 1, this.getdate[2], this.gettime[0], this.gettime[1]));
      // записываю в setTime:
      this.todo.setTime = this.createformdate;

      console.log(this.getdate);

      this.todoesServices.updateTodo(this.todo);
      this.router.navigate(['/']);

    }

  }

}
