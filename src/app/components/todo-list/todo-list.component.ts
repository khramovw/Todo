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
  inDate: any;
  inMonth: any = {month: 'long'};

  constructor( private todoesService: TodoesService ) { }

  ngOnInit() {

    // Получаю все таски
    this.todoesService.getTodoes().subscribe(todoes => {
      this.todoes = todoes;
      console.log(this.todoes);

      todoes.forEach( ( todo, i, todoes ) => {
        console.log(todo, i);

        let dp = new Date( todoes[i].setTime );
        console.log(dp);

        let options = { month: 'long', day: 'numeric' };
        // this.inDate = dp.toLocaleString('ru', options );

        this.inDate = new Date( todoes[i].setTime ).getDate();
        this.inMonth = dp.toLocaleString('ru', {month: 'long'} );
        console.log( this.inDate , this.inMonth );


      })
    })
  }
}
