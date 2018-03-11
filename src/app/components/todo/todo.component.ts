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

  todoDate: string;
  taskHeadClass = {};
  todoDone: boolean;
  dataNow: any;

  // Получаю элементы формы
  @ViewChild("todoForm") form: any;

  constructor( private todoesService: TodoesService ) {

    // Классы для хедера таска
    this.taskHeadClass = {
      success: this.todoDone,
      worning: false
    };

  }

  ngOnInit() {
    console.log( this.form );
    this.dataNow = +(new Date());


  }

  onSubmit(todo) {

    this.todoesService.getTodo(todo.id).subscribe( todo => {
      // console.log(todo.id);
      if ( todo ) {

        this.todo = todo;

        this.todo.done = this.form.value.check;

        this.todoesService.updateTodo(this.todo);

        console.log(this.todo);
        console.log(this.form.value.check);
        console.log(`this.todo ${this.todo}
                      this.todo.done ${this.todo.done}
                      todo.id ${todo.id}`);
      }
    }, error => {
      console.error(error);
    })

  }

}
