import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

// Models
import { Task } from '../models/Task';

@Injectable()
export class TodoesService {

  todoesCollection: AngularFirestoreCollection<Task>;
  todoDocument: AngularFirestoreDocument<Task>;
  todoes: Observable<Task[]>;
  todo: Observable<Task>;

  constructor( private afs: AngularFirestore ) {

    this.todoesCollection = this.afs.collection('todoes', ref => ref.orderBy('date'));

  }

  getTodoes(): Observable<Task[]> {
    this.todoes = this.todoesCollection.snapshotChanges().map(collection => {
      return collection.map(document => {
        const data = document.payload.doc.data() as Task;
        data.id = document.payload.doc.id;
        return data;
      });
    });
    return this.todoes;
  }

  addTodo( todo: Task ) {
    this.todoesCollection.add(todo);
  }

  getTodo(id: string): Observable<Task> {
    this.todoDocument = this.afs.doc<Task>(`todoes/${id}`);
    this.todo = this.todoDocument.snapshotChanges().map(action => {
      if ( action.payload.exists === false ) {
        return null;
      } else {
        const data = action.payload.data() as Task;
        data.id = action.payload.id;
        return data;
      }
    });
    return this.todo;
  }

  updateTodo( todo: Task ) {
    this.todoDocument = this.afs.doc(`todoes/${todo.id}`);
    this.todoDocument.update(todo);
  }

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

  getTodoDone(todoes, status) {
    todoes.forEach(todo => {
      if( todo.done == status ){
        return todo;
      }
      console.log('todo.done',todo);
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

  getDateTimeToGMT(todoes) {
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
    // for( let i = 0, max = todoes.length; i < max; i++) {
    //   var getdate = this.todoes[i].date.split('-'),
    //       gettime = this.todoes[i].time.split(':'),
    //       createformdate = +(new  Date(getdate[0], getdate[1], getdate[2], gettime[0], gettime[1]));
    //   console.log(getdate[0], getdate[1], getdate[2], gettime[0], gettime[1]);
    //
    //   todoes[i].setTime = createformdate;
    //   console.log(todoes[i]);
    //
    //   this.todoesService.updateTodo(todoes[i]);
    // }
  }

}
