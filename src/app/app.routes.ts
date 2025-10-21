import { Routes } from '@angular/router';
import { CadastrarTarefas } from './cadastrar-tarefas/cadastrar-tarefas';
import { ListarTarefas } from './listar-tarefas/listar-tarefas';


export const routes: Routes = [
    { path: 'cadastrar-tarefas', component: CadastrarTarefas},
    { path: 'listar-tarefas', component: ListarTarefas}

];
