import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.store';
import { Todo } from '../todo-item/todo-item.component';
import { Observable } from 'rxjs/Observable';
import { ADD_TODO } from '../store/todos/todos.reducers';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
   const todosStream: Observable<Todo[]> = this.store.select('todos');

   todosStream.subscribe((todos) => {
      this.todos = todos;
   });
  }

  addTodo(todo: { title: string }) {
    this.store.dispatch({ type: ADD_TODO, payload: { id: this.todos.length + 1, title: todo.title } });
  }
}
