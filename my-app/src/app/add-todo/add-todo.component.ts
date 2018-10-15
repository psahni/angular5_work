import { Store } from '@ngrx/store';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo = new EventEmitter<{title: string}>();

  form: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      title: ['', Validators.required],
    });
  }

  onAddTodo() {
    this.addTodo.emit({ title: this.form.value.title });
  }

  get title() { return this.form.get('title'); }

  ngOnInit() {}

}
