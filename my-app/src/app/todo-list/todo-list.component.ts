import { Component, OnInit, Input,
  ViewChild, AfterViewInit,
  ViewChildren, QueryList, OnChanges, Output,
  EventEmitter
} from '@angular/core';
import { Todo, TodoItemComponent} from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild(TodoItemComponent) set todoItem(component: TodoItemComponent) {
    // console.log('This will be called every time a ref is updated');
    // console.log(component);
  }

  @ViewChildren(TodoItemComponent) set todoItem2(components: QueryList<TodoItemComponent>) {
    // console.log('This will be called every time a ref is updated');
    // console.log(components);
  }

  // @ViewChild(TodoItemComponent) itemComponent: TodoItemComponent; // This will be called in the life cycle function only once

  @Input() todos: Todo[];
  @Output()   complete = new EventEmitter();
  @Output()   delete   = new EventEmitter();

  constructor() {
    // console.log(`new - itemComponent is ${this.itemComponent}`);
  }

  ngOnInit() {
    console.log('%c ngOnInit of TODO LIST is called', 'yellowgreen');
  }

  ngOnChanges(todos): void {
    console.log('changes:-', todos);
    console.log('%c ngOnChanges of TODO LIST is called', 'yellowgreen');
  }

  ngAfterViewInit() {
    // console.log('after view init..');
    // console.log(this.itemComponent);
    // const todoitems = this.todoitems.toArray() ;
    // console.log('--> ', todoitems[0]);
  }

  completeTodo(todo) {
    this.complete.emit(todo);
  }

  deleteTodo(todo) {
    this.delete.emit(todo);
  }
}
