import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterContentInit, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class TodoItemComponent implements OnInit, OnChanges , AfterContentInit, AfterViewInit, OnDestroy {
  @Input() todo: Todo;

  constructor() {}


  /**
   * LIFE CYCLE HOOKS
   *
   */

  ngOnInit() {
    console.log('%c ngOnInit function called', 'color: red');
   }

  ngOnChanges() {
    console.log('%c OnChanges function called', 'color: orange');
  }

  ngAfterContentInit() {
    console.log('%c ngAfterContentInit function called', 'color: green');
  }

  ngAfterViewInit() {
    console.log('%c ngAfterViewInit function called', 'color: violet');
  }

  ngOnDestroy() {
    console.log('%c ngOnDestroy function called', 'color: brown');
  }

  /*------------------------------------------------------------------------------------- */


}
