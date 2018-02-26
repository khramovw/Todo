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

  constructor( private todoesService: TodoesService ) { }

  ngOnInit() {

    this.todoesService.getTodoes().subscribe(todoes => {
      this.todoes = todoes;


      this.todoesService.getTodoDone(todoes, this.todoDone);

      this.todoesService.getSortBayDate(todoes, this.todoDate = "2018-02-01");

    });

  }

}
