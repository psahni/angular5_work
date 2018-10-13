import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent {
  todos = [{
    id: 1,
    title: 'Wake Up'
  },
  {
    id: 2,
    title: 'Coding'
  }];

  constructor() { }

  addTodo(todo: { title: string }) {
    this.todos.push({ id: this.todos.length + 1, title: todo.title});
  }
}
