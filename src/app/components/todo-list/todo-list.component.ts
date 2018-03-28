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
  dataNow: any;
  public toggleList: boolean = true;
  tab0: any = [];
  tab1: any = [];

  constructor( private todoesService: TodoesService ) { }

  ngOnInit() {

    this.dataNow = new Date();

    let toggleList = this.toggleList;

    // Получаю все задачи
    this.todoesService.getTodoes().subscribe(todoes => {

      this.todoes = todoes;

      console.log('Получаю все задачи: ','toggleList-', toggleList, 'this.toggleList-', this.toggleList);

      // Нахожу активные задачи
      this.todoes.forEach( todo => {

        if ( todo.setTime > this.dataNow && !todo.done ) {

          this.tab0.push(todo);                   // Записываю активные задачи

        } else if ( todo.setTime < this.dataNow && !todo.done || todo.setTime < this.dataNow && todo.done  ) {

          this.tab0.pop(todo);                    //Удаляю не активную задачу из активных
          this.tab1 = this.todoes;                // Записываю все задачи

        }

      } );
      console.log('this.tab0', this.tab0);
      console.log('this.tab1', this.tab1);

    });

    // Нахожу кнопки активные и текущие задачи
    let tabControls = document.querySelectorAll('.toggle-task-list span'),
        arr         = [].slice.call(tabControls); // Записываю из объекта масив

    // Переключаю кнопки активные и текущие задачи
    function tabToggle(e) {

      e.preventDefault();

      // Останавливаю всплытие события
      e.stopPropagation();

      if ( !this.matches('.active')) {

        arr.forEach( btn => btn.classList.toggle('active') );//На активный таб добавляю класс active

      }

    }

    //Отслеживаю клик на элементе
    arr.forEach( btn => btn.addEventListener( 'click', tabToggle ) );

  }

  tabToggleClick() {

    this.toggleList = !this.toggleList;

  }
}
