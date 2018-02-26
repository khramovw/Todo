import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

// Services
import { TodoesService } from "../../services/todoes.service";

// Models
import { Task } from '../../models/Task';


@Component({
  selector: 'app-todo-del',
  templateUrl: './todo-del.component.html',
  styleUrls: ['../todo-add/todo-add.component.css','./todo-del.component.css']
})
export class TodoDelComponent implements OnInit {

  @ViewChild("todoForm") form: any;

  todo: Task = {
    date: '',
    id: '',
    done: false,
    header: '',
    text: '',
    time: '',
    timestamp: ''
  };
  id: string;

  constructor( private todoesService: TodoesService,
               private router: Router,
               private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.todoesService.getTodo(this.id).subscribe( todo => {
      if ( todo ) {
        this.todo = todo;
      }
    })
  }

  onSubmit() {
    this.todoesService.deleteTodo(this.todo);
    this.router.navigate(['/']);
  }

}
