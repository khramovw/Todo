import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

// Models
import { Task } from '../models/Task';

@Injectable()
export class TodoesService {

  todoesCollection: AngularFirestoreCollection<Task>; // Колекция firebase
  todoDocument: AngularFirestoreDocument<Task>;       // Документ firebase
  todoes: Observable<Task[]>;
  todo: Observable<Task>;

  constructor( private afs: AngularFirestore ) {

    // Получаю колекцию[] из firebase
    this.todoesCollection = this.afs.collection('todoes', ref => ref.orderBy('date'));

  }

  // Получаю все документы колекции[{}], масив объектов firebase
  getTodoes(): Observable<Task[]> {
    this.todoes = this.todoesCollection.snapshotChanges().map(collection => {
      return collection.map(document => {
        const data = document.payload.doc.data() as Task;
        // Получаю id документа
        data.id = document.payload.doc.id;
        return data;
      });
    });
    return this.todoes;
  }

  // Добавляю новый документ в firebase
  addTodo( todo: Task ) {
    this.todoesCollection.add(todo);
  }

  // Получаю один документ колекции из firebase
  getTodo(id: string): Observable<Task> {
    this.todoDocument = this.afs.doc<Task>(`todoes/${id}`);
    this.todo = this.todoDocument.snapshotChanges().map(action => {
      if ( action.payload.exists === false ) {
        return null;
      } else {
        const data = action.payload.data() as Task;
        // Получаю id документа
        data.id = action.payload.id;
        return data;
      }
    });
    return this.todo;
  }

  // Обнавляю один документ колекции firebase
  updateTodo( todo: Task ) {
    this.todoDocument = this.afs.doc(`todoes/${todo.id}`);
    this.todoDocument.update(todo);
  }

  // Удоляю один документ колекции firebase
  deleteTodo( todo: Task ) {
    this.todoDocument = this.afs.doc(`todoes/${todo.id}`);
    this.todoDocument.delete()
      .then(function() {
        console.log("Document successfully deleted!");
      }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
    console.log(todo);
  }

  // getTodoDone(status, todoes: Observable<Task[]>) {
  //   this.todoes.forEach((todo) => {
  //     if( todo.done == status ){
  //       console.log('todo.done',todo);
  //       return todo;
  //     }
  //     // console.log('todo.done',todo);
  //   });
  // }

  getTodoDoneClass(todoes, status) {
    todoes.forEach(todo => {
      if( todo.done == !status && todo.setTime < +( new Date()) ){
        return todo;
      }
      console.log('todo.done && date',todo);
    });
  }

  getSortBayDate(todoes, todoDate) {
    todoes.forEach(todo => {
      if( todo.data === todoDate ){
        return todo;
      }
      console.log('todo.data',todo);
    });

  }

  getDateTimeToGMT(todo) {
    // получаю дату и время в одной строке в GMT
    // for( let i = 0, max = todoes.length; i < max; i++) {
    //   var getdate = this.todoes[i].date.split('-'),
    //       gettime = this.todoes[i].time.split(':'),
    //       createformdate = +(new  Date(getdate[0], getdate[1], getdate[2], gettime[0], gettime[1]));
    //
    //   todoes[i].setTime = createformdate;
    //   console.log(todoes[i]);
    //
    //   this.updateTodo(todoes[i]);
    // }

    // обновляаю дату и время в setTime

      // var getdate = this.todo.date.split('-').reverse().join('-').split('-'),
      //     gettime = this.todo.time.split(':');
      // console.log(getdate);
      // this.todo.setTime = +(new  Date(getdate[0], getdate[1], getdate[2], gettime[0], gettime[1]));
      // console.log(getdate[0], getdate[1], getdate[2], gettime[0], gettime[1]);
      //
      // // this.todo.setTime = createformdate;
      // console.log(this.todo);
      //
      // this.todoDocument.update(this.todo);

  }

}


