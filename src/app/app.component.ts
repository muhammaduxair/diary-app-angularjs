import { Component } from '@angular/core';
import Todo from './Todo.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  localTodos: string | null;
  todos: Todo[];
  todoTitle: string = '';
  todoDescription: string = '';
  isValidTitle: boolean = true;
  isValidDesc: boolean = true;

  constructor() {
    this.localTodos = localStorage.getItem('TODOS');
    if (this.localTodos === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localTodos);
    }
  }

  addTodoHandler() {
    if (this.todoTitle && this.todoDescription) {
      this.todos.push({
        title: this.todoTitle,
        desc: this.todoDescription,
        active: true,
        time: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'),
      });
      this.todoTitle = '';
      this.todoDescription = '';
      localStorage.setItem('TODOS', JSON.stringify(this.todos));
    } else {
      this.todoTitle === '' ? (this.isValidTitle = false) : null;
      this.todoDescription === '' ? (this.isValidDesc = false) : null;
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    localStorage.setItem('TODOS', JSON.stringify(this.todos));
  }

  onChangeHandler() {
    this.todoTitle.length > 0 ? (this.isValidTitle = true) : null;
    this.todoDescription.length > 0 ? (this.isValidDesc = true) : null;
  }
  doneTodo(index: number) {
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('TODOS', JSON.stringify(this.todos));
  }
}
