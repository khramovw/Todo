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
  todo: Task;


  id: string;

  constructor( private todoesService: TodoesService ) { }

  ngOnInit() {

    // Получаю все таски
    this.todoesService.getTodoes().subscribe(todoes => {
      this.todoes = todoes;

      // for( let i = 0; i < this.todoes.length; i ++ ) {
      //   if( todoes[i].done ) {
      //     console.log(todoes[i]);
      //     this.todoDone = true;
      //     // this.taskHeadClass.success = true;
      //   }
      // }
    });

  }

}
