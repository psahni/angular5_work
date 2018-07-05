import { Component, OnInit } from '@angular/core';

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
}
