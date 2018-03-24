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

  onSubmit($event) {

    console.log('form', this.form);

    // this.todoesService.getTodo(todo.id).subscribe( todo => {
    //
    //   if ( todo ) {
    //
    //     //Получаю таск
    //     this.todo = todo;
    //
    //     // Получаю из фомы статус таска и записываю в done
    //     this.todo.done = this.form.value.check;
    //
    //     // Обновляю таск
    //     this.todoesService.updateTodo(this.todo);
    //
    //   }
    //
    // }, error => {
    //   console.error(error);
    // });

  }

  onTodoCheck($event, todo) {

    //Останавливаю всплытие события
    $event.stopPropagation();

    //Получаю таск
    this.todo = todo;

    // Получаю из фомы статус таска и записываю в todo.done
    this.todo.done = $event.toElement.checked;

    // Обновляю таск
    this.todoesService.updateTodo(this.todo);

  }

}
