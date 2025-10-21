import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../tarefa-service'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefas',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefas.html',
  styleUrl: './cadastrar-tarefas.scss'
})
export class CadastrarTarefas {
  status: boolean | false = false;
  problema = '';
  data : any;
  tecnico: any;
  cliente: any;

  constructor(private srv: TarefaService) {}

  salvar() {
    if (!this.problema.trim() || !this.data || !this.cliente || !this.tecnico) return;
    this.srv.adicionar({
      id: 0,
      status: this.status,
      problema: this.problema.trim(),
      data: this.data,
      cliente: this.cliente,
      tecnico: this.tecnico.trim() || undefined,
      concluida: false
    });
    this.problema = ''; this.data = ''; this.cliente = null; this.tecnico = '';
  }
}