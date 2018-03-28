import { Component, OnInit, ViewChild, Input } from '@angular/core';

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
  @Input() tab0: Task[];
  @Input() tab1: Task[];

  taskHeadClass = {};
  dataNow: any;

  // Получаю элементы формы
  @ViewChild("todoForm") form: any;

  constructor( private todoesService: TodoesService ) {

    // Классы для хедера таска
    this.taskHeadClass = {
      success: false,
      worning: false,
      overdue: false
    };

  }

  ngOnInit() {

    // Текущий момент времени
    this.dataNow = +(new Date());

  // function timer(date) {
  //
  //   let seconds = (new Date(date)).getTime() - (new Date()).getTime();
  //
  //   seconds     = parseInt(seconds / 1000 );
  //   let minutes = parseInt(seconds / 60 );
  //   let hours   = parseInt(seconds / 3600 );
  //   let day     = parseInt(seconds / 86400 );
  //
  //   seconds -= minutes * 60;
  //
  //   console.log(day,' day', hours, ' hours', minutes, 'minutes', seconds, 'seconds');
  //
  //
  //   let htmlel = `<span>${hours} ${minutes} ${seconds}</span>`;
  //
  //   if ((new Date(date)).getTime() >= (new Date()).getTime()) setTimeout('timer(\'' + date + '\');', 1000);
  //
  //   document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
  //
  //   // document.getElementById("time").appendChild( htmlel);
  //
  //   // console.log(htmlel)
  //
  // }

    // function startTime() {
    //   var date = new Date();
    //   var days = date.getDate();
    //   var hours = date.getHours();
    //   var minutes = date.getMinutes();
    //   var seconds = date.getSeconds();
    //   if (hours < 10) hours = "0" + hours;
    //   if (minutes < 10) minutes = "0" + minutes;
    //   if (seconds < 10) seconds = "0" + seconds;
    //   document.getElementById("time").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    //   setTimeout(startTime, 1000);
    // }

  // timer( 'MArth 29, 2018' );

    // function timer(){
    //
    //   var hour = document.getElementById('hour').innerHTML;
    //   var minute = document.getElementById('minute').innerHTML;
    //   var second = document.getElementById('second').innerHTML;
    //   var end = false;
    //
    //   if( second > 0 ) second--;
    //   else{
    //     second = 60;
    //
    //     if( minute > 0 ) minute--;
    //     else{
    //       second = 60;
    //
    //       if( hour > 0 ) hour--;
    //       else end = true;
    //     }
    //   }
    //
    //   if(end){
    //     clearInterval(intervalID);
    //     alert("Таймер сработал!");
    //   }else{
    //     document.getElementById('hour').innerHTML = hour;
    //     document.getElementById('minute').innerHTML = minute;
    //     document.getElementById('second').innerHTML = second;
    //   }
    // }
    // window.intervalID = setInterval(timer, 1000);

  }

  onSubmit($event) {

    console.log('form', this.form);

    // this.todoesService.getTodo(todo.id).subscribe( todo => {
    //
    //   if ( todo ) {
    //
    //     //Получаю таск
    //     this.todo = todo;
    //
    //     // Получаю из фомы статус таска и записываю в done
    //     this.todo.done = this.form.value.check;
    //
    //     // Обновляю таск
    //     this.todoesService.updateTodo(this.todo);
    //
    //   }
    //
    // }, error => {
    //   console.error(error);
    // });

  }

  onTodoCheck($event, todo) {

    $event.preventDefault();

    if( $event.target.tagName === 'INPUT') {

      //Останавливаю всплытие события
      $event.stopPropagation();

      //Получаю таск
      this.todo = todo;

      // Получаю из фомы статус таска и записываю в todo.done
      this.todo.done = $event.toElement.checked;

      // Обновляю таск
      this.todoesService.updateTodo(this.todo);

    }

  }

}
