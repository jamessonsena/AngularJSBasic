import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';
  constructor() {
    this.todos.push(new Todo(1,"Passear com o carro",false));
    this.todos.push(new Todo(2, "Passear com o aviao", false));
    this.todos.push(new Todo(3, "Passear com o onibus", true));


  }
}
