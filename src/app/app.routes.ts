import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CardPostComponent } from './components/card-post/card-post.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //     path: '',
    //     component: CardPostComponent,
    //   },
    // ],
  },
  // {path:'cadastro', component: CadastroComponent},
];
