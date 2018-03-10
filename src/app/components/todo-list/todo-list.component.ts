import { Component, OnInit } from '@angular/core';

// Services
import { TodoesService } from "../../services/todoes.service";

// Models
import { Task } from "../../models/Task";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoes: Task[];
  id: string;
  tasksDay: any ;
  inMonth: any;

  constructor( private todoesService: TodoesService ) { }

  ngOnInit() {

    // Получаю все таски
    this.todoesService.getTodoes().subscribe(todoes => {
      this.todoes = todoes;
      console.log(this.todoes);

      this.tasksDay = todoes.filter((todo,i,todoes) => {
        console.log(todo,i);

        let thisday = String(todo.setTime.toLocaleString('ru',{day: 'numeric', month: 'long'}));

        


        console.log(thisday);


      });
      console.log(this.tasksDay);

      for( let i = 0, max = this.todoes.length; i < max; i++ ) {
        // console.log('todoes[i]: ', this.todoes[i]);


      }

    })
  }
}
