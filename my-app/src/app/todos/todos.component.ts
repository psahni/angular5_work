import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/app.store';
import { Todo } from '../todo-item/todo-item.component';
import { Observable } from 'rxjs/Observable';

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
}
