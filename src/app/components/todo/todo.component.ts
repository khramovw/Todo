import { Component, OnInit, ViewChild, Input } from '@angular/core';

// Models
import { Task } from "../../models/Task";

// Services
import { TodoesService } from "../../services/todoes.service";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // получаю таски из todo-list
  @Input() todoes: Task[];
  @Input() todo: Task;

  taskHeadClass = {};
  dataNow: any;

  // Получаю элементы формы
  @ViewChild("todoForm") form: any;

  constructor( private todoesService: TodoesService ) {

    // Классы для хедера таска
    this.taskHeadClass = {
      success: false,
      worning: false,
      overdue: false
    };

  }

  ngOnInit() {

    // Текущий момент времени
    this.dataNow = +(new Date());

  }

  onSubmit(todo) {

    //Останавливаю всплытие события
    todo.stopPropagation();

    // console.log('todo', todo);
    // console.log('this.form', this.form);

    //Получаю таск
    this.todo = todo;

    // console.log('this.todo', this.todo);

    // Получаю из фомы статус таска и записываю в done
    this.todo.done = this.form.value.check;

    // console.log('todo done', this.todo.done);

    // Обновляю таск
    this.todoesService.updateTodo(this.todo);

    // console.log('updateTodo', this.todo.done);

    // this.todoesService.getTodo(todo.id).subscribe( todo => {
    //
    //   if ( todo ) {
    //
    //     console.log('todo', todo);
    //
    //     //Получаю таск
    //     this.todo = todo;
    //
    //     console.log('this.todo', this.todo);
    //
    //     // Получаю из фомы статус таска и записываю в done
    //     this.todo.done = this.form.value.check;
    //
    //     console.log('todo done', this.todo.done);
    //
    //     // Обновляю таск
    //     this.todoesService.updateTodo(this.todo);
    //
    //     console.log('updateTodo', this.todo.done);
    //
    //   }
    //
    // }, error => {
    //   console.error(error);
    // });

  }

}
