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
      success: false,
      worning: false,
      overdue: false
    };

  }

  ngOnInit() {

    // Текущий момент времени
    this.dataNow = +(new Date());

    // this.taskHeadClass = {
    //   worning: todo.setTime=100 < dataNow=150 && todo.done=0 ,
    //   success: todo.setTime=150 > dataNow=100 && todo.setTime > todo.done=50 > 0 ,
    //   overdue: todo.setTime=100 > dataNow=150 && todo.setTime < todo.done=120
    //
    // }


  }

  onSubmit(todo) {

    this.todoesService.getTodo(todo.id).subscribe( todo => {

      if ( todo ) {

        //Получаю таск
        this.todo = todo;

        // Получаю из фомы статус таска и записываю в done
        // this.todo.done = this.form.value.check;

        if( this.form.value.check ) {
          this.todo.done = +(new Date());
        }

        // Обновляю таск
        this.todoesService.updateTodo(this.todo);

      }
    }, error => {
      console.error(error);
    })

  }

}
