import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, Tarefa } from '../tarefa-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-tarefas',
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-tarefas.html',
  styleUrl: './listar-tarefas.scss'
})
export class ListarTarefas {
  tarefas: Tarefa[] = [];
  status: any;

  constructor(private srv: TarefaService) {
    this.tarefas = this.srv.listar();
  }

  concluir(id: number){
    this.srv.marcarConcluir(id, true)
  }

  remover(id: number) {
    this.srv.remover(id);
  }
}