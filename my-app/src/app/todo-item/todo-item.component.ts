import { Component, OnInit, Input } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent {
  @Input('todo') todo: Todo;

  constructor() { }
}
