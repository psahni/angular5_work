import { Component } from '@angular/core';
import { Todo } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent {
  todos = [{
    id: 1,
    title: 'Wake Up',
    completed: false
  },
  {
    id: 2,
    title: 'Coding',
    completed: false
  }];

  constructor() { }

  addTodo(todo: { title: string }) {
    this.todos = [...this.todos, { id: this.todos.length + 1, title: todo.title, completed: false }];
  }

  deleteTodo(todo: Todo) {
    const todoLoc = this.todos.findIndex((_todo) => _todo.id === todo.id);
    this.todos.splice(todoLoc, 1);
  }

  completeTodo(todo: Todo) {
    const todoLoc = this.todos.findIndex((_todo) => _todo.id === todo.id);
    this.todos[todoLoc] = Object.assign({}, todo, { completed: !todo.completed });
    console.log('updated todos = ', JSON.stringify(this.todos, null, 2));
  }
}
