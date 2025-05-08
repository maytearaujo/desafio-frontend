import { Component } from '@angular/core';
import { PostagemService } from '../../../services/postagem.service';
import { Router } from '@angular/router';
import { Postagem } from '../../../model/postagem.model';
import { FormularioComponent } from "../../../components/postagem/formulario/formulario.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  constructor(
    private servicePostagem: PostagemService,
    private router: Router
  ) {}

  criarPostagem(postagem: Postagem) {
    this.servicePostagem.criarPostagem(postagem).subscribe((Response) => {
      alert('Postagem Cadastrada!');
      this.router.navigate(['/']);
    });
  }
}
