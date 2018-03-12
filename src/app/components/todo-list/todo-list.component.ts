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

  constructor( private todoesService: TodoesService ) { }

  ngOnInit() {

    // Получаю все таски
    this.todoesService.getTodoes().subscribe(todoes => {
      this.todoes = todoes;

      // console.log(this.todoes);

    })
  }
}
