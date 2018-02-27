import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

// Services
import { TodoesService } from '../../services/todoes.service';


// Models
import { Task } from '../../models/Task';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  getdate: any;
  gettime: any;
  createformdate: any;
  todo: Task = {
    date: '',
    id: '',
    done: false,
    header: '',
    text: '',
    time: '',
    timestamp: '',
    setTime: 0
  };

  @ViewChild("todoForm") form: any;

  constructor( private todoesService: TodoesService,
               private router: Router ) {

  }

  ngOnInit() {
  }

  onSubmit() {
    if ( !this.form.valid ) {
      console.log('no validate form');

    } else {

      // Получаю время
      this.todo.timestamp = +(new Date());

      // получаю из ипутов дату и время и собираю в формате GMT и записываю в setTime:
      this.getdate = this.todo.date.split('-');           // от инпута с датой получаю строку и создаю масив
      this.gettime = this.todo.time.split(':'); // от инпута с временем получаю строку и создаю масив
      // собираю число в формате GMT
      this.createformdate = +(new  Date(this.getdate[0], this.getdate[1]-1, this.getdate[2], this.gettime[0], this.gettime[1]));
      // записываю в setTime:
      this.todo.setTime = this.createformdate;

      // Отправка таска
      this.todoesService.addTodo(this.todo);

      // Перход на роут
      this.router.navigate(['/']);

    }
  }

}
