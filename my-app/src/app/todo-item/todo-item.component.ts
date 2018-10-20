import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() completeTodo =  new EventEmitter<{id: number, completed: boolean}>();

  constructor() {}

  markComplete($event) {
    const checked = $event.target.checked;
    this.completeTodo.emit({ id: this.todo.id, completed: checked });
  }

  isCompleted() {
    return this.todo.completed;
  }

}
