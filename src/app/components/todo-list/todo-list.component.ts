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

  todo: Task;
  todoLength: any;

  id: string;

  constructor( private todoesService: TodoesService ) { }

  ngOnInit() {

    this.todoesService.getTodoes().subscribe(todoes => {
      console.log(todoes);

    });


  }


}
