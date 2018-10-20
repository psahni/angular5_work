import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  form: FormGroup;

  @Output() addTodo = new EventEmitter<{ title: string }>();
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      title: ['', Validators.required],
    });
  }

  onAddTodo() {
    this.addTodo.emit({ title: this.form.value.title });
    this.form.reset();
  }

  get title() { return this.form.get('title'); }

  ngOnInit() {}

}
