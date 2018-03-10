import { Component, OnInit, Input } from '@angular/core';

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

  }

}
