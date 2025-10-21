import { Injectable } from '@angular/core';

export interface Tarefa {
  concluida: boolean;
  status: boolean;
  id: number;
  problema: string;
  data: string;
  tecnico: string;
  cliente: string;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private _tarefas: Tarefa[] = [];

  listar(): Tarefa[] {
    return this._tarefas;
  }

  private nextId(): number {
    return Date.now();
  }

  adicionar(l: Tarefa): void {
  this._tarefas.push({ ...l, id: this.nextId() });
  }

  marcarConcluir(id: number, valor: boolean): void {
  const tarefa = this._tarefas.find(tarefa => tarefa.id === id);
    if (tarefa) {
      tarefa.concluida = valor;
      tarefa.status = valor;
    }
  }

  toggleConcluida(id: number): void {
    const tarefa = this._tarefas.find(tarefa => tarefa.id === id);
    if (tarefa) tarefa.concluida = !tarefa.concluida
  }
  
  remover(id: number): void {
    const i = this._tarefas.findIndex(l => l.id === id);
    if (i >= 0) this._tarefas.splice(i, 1);
  }
}