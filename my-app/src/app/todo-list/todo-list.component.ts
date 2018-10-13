import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Todo, TodoItemComponent} from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit, AfterViewInit {
  @ViewChild(TodoItemComponent) itemComponent: TodoItemComponent;

  @Input() todos: Todo[];
  constructor() {
    console.log(`new - itemComponent is ${this.itemComponent}`);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - TodoItemComponent is ${JSON.stringify(this.itemComponent)}`);
  }
}
