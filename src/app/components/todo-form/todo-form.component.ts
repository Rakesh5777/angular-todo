import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuid } from 'uuid';

import { Todo } from '../../model/Todo';
import { TodoForm } from './todo-form.component.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('rakesh11') rakeh: ElementRef;
  @Output() public bool = new EventEmitter();
  todos: Todo[];
  rakesh: string = '';
  uid: string;


  constructor(private todoService: TodoService, private rakesh1: TodoForm) {
    // this.rakeh.nativeElement.focus();

  }
  ngOnInit(): void {
    this.todos = [
      // {
      //   id: '111',
      //   title: 'rakesh',
      //   isCompleted: true,
      //   date: new Date(),
      // },
      // {
      //   id: '222',
      //   title: 'honey',
      //   isCompleted: true,
      //   date: new Date(),
      // },
      // {
      //   id: '333',
      //   title: 'sravs',
      //   isCompleted: false,
      //   date: new Date(),
      // },
    ];
    this.rakesh1.focus();
  }

  regex(event) {
    const regex = /^[A-z]*$/;
    if (regex.test(event.target.value)) {
      this.rakesh = event.target.value;
    } else {
      event.target.value = this.rakesh;
    }
  }

  add() {
    const todos = {
      id: uuid(),
      title: this.rakesh,
      date: new Date(),
      isCompleted: false,
    };
    if (this.rakesh) {
      this.todoService.addTodos(todos);
      this.bool.emit("hai");
      this.todos.push(todos)
    }
    this.rakesh = '';
  }

  hao(event) {
    this.bool.emit("");
  }

  keyDown(event) {
    if (event.ctrlKey)
      if (event.keyCode == 16) {
        event.preventDefault();
        this.todoService.delete();
        this.todos = [];
      }
  }
}
