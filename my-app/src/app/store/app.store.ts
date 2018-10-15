import { StoreModule } from '@ngrx/store';
import { todoListReducer } from './todos/todos.reducers';
import { Todo } from '../todo-item/todo-item.component';


export interface AppState {
  todos: Todo[];
}

const reducers = {
  todos: todoListReducer
};

export const AppStore = StoreModule.forRoot(reducers);
