import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/Todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() deleteTodoEvent: EventEmitter<number> = new EventEmitter();
  @Output() doneTodoEvent: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.deleteTodoEvent.emit(this.i);
  }
  onDone() {
    this.doneTodoEvent.emit(this.i);
  }
}
