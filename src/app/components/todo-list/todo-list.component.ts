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
  toggleList: boolean = true;

  constructor( private todoesService: TodoesService ) { }

  ngOnInit() {
    console.log('toggleList', this.toggleList);

    // Получаю все таски
    this.todoesService.getTodoes().subscribe(todoes => {

      this.todoes = todoes;

    });

    // Перерключаю активные и текущие задачи
    let tabControls = document.querySelectorAll('.toggle-task-list span'),
        arr         = [].slice.call(tabControls);

    function tabToggle(e) {

      e.preventDefault();
      //Останавливаю всплытие события
      e.stopPropagation();

      if ( !this.matches('.active')) {

        arr.forEach( btn => btn.classList.toggle('active') );

        if ( this.dataset['tab'] === '0' ){
          this.toggleList = false;
        } else {
          this.toggleList = true;
        }

      }




    }

    //Отслеживаю клик
    arr.forEach( btn => btn.addEventListener('click', tabToggle ) );

  }
}
