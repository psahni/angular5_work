import { Component, OnInit, Input, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Todo, TodoItemComponent} from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit, AfterViewInit {
  @ViewChild(TodoItemComponent) itemComponent: TodoItemComponent;
  @ViewChildren(TodoItemComponent) todoitems: QueryList<TodoItemComponent>;

  @Input() todos: Todo[];
  constructor() {
    // console.log(`new - itemComponent is ${this.itemComponent}`);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - TodoItemComponent is ${JSON.stringify(this.itemComponent)}`);
    const todoitems = this.todoitems.toArray() ;
   // console.log('--> ', todoitems[0]);
  }

  markComplete({ id, completed }) {

    const todoLoc = this.todos.findIndex((_todo) => _todo.id === id);
    const todo = this.todos[todoLoc];
    todo.completed = completed;

    console.log('updated todos = ', JSON.stringify(this.todos, null, 2));
  }
}
