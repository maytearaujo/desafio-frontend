import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/postagem/cadastro/cadastro.component';
import { DetalhesComponent } from './pages/postagem/detalhes/detalhes.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '/', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  // { path: '**', component: ErrorPageComponent }
];
