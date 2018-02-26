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

      // Получение времени
      // this.todo.date = Date.parse(`${this.form.value.date}:${this.form.value.time}`);

      this.todoesServices.updateTodo(this.todo);
      this.router.navigate(['/']);

    }

  }

}
