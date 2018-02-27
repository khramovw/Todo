import { Component, OnInit } from '@angular/core';

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


  todoes: Task[];
  todo: Task;


  todoDate: string;

  taskHeadClass = {};
  todoDone: boolean = false;

  dataNow = +(new Date());

  constructor( private todoesService: TodoesService ) {

    // Классы для хедера таска
    this.taskHeadClass = {
      success: this.todoDone,
      worning: false
    };

  }

  ngOnInit() {
    // Получаю все таски
    this.todoesService.getTodoes().subscribe(todoes => {
      this.todoes = todoes;

      for( let i = 0; i < this.todoes.length; i ++ ) {
        if( todoes[i].done ) {
          console.log(todoes[i]);
          this.todoDone = true;
          // this.taskHeadClass.success = true;
        }
      }
    });

  }


}
