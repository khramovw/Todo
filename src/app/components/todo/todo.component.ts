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

  todoDone: boolean = false;
  todoDate: string;

  taskHeadClass: {
    success: boolean,
    worning: boolean
  };

  constructor( private todoesService: TodoesService ) {

    // Классы для хедера таска
    this.taskHeadClass = {
      success: false,
      worning: false
    };

  }

  ngOnInit() {
    // Получаю все таски
    this.todoesService.getTodoes().subscribe(todoes => {

      this.todoes = todoes;

      // Получаю выполненные таски
      this.todoesService.getTodoDone(todoes, this.todoDone);
      this.todoesService.getSortBayDate(todoes, this.todoDate = "2018-02-01");

      // // Классы для хедера таска
      // this.taskHeadClass = {
      //   succesOn: this.classSucces = false,
      //   worningOn: this.classWorning = true,
      // }

    });

    this.taskHeadClass.success = true;

  }

}
