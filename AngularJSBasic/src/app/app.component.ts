import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = 'Minhas Tarefas';
  constructor() {
    this.todos.push('passar com o carro');
    this.todos.push('passar com o aviao');
    this.todos.push('passar com o onibus');
    this.todos.push(3456);
    this.todos.push(new Date());
    this.todos.push({test:"wew"});


  }
}
