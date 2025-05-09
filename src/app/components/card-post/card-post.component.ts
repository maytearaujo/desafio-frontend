import { Component, OnInit } from '@angular/core';
import { Postagem } from '../../model/postagem.model';
import { PostagemService } from '../../services/postagem.service';
import { RouterModule } from '@angular/router';
import { MaismenosComponent } from '../maismenos/maismenos.component';

@Component({
  selector: 'app-card-post',
  standalone: true,
  imports: [RouterModule, MaismenosComponent],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css',
})
export class CardPostComponent implements OnInit {
  postagems: Postagem[] = [];

  constructor(private servicePostagem: PostagemService) {}

  ngOnInit(): void {
    this.servicePostagem.getPostagens().subscribe((response) => {
      this.postagems = response;
      // console.log(response)
    });
  }

  deletar(id: number | null) {
    this.servicePostagem.DeletarPostagem(id).subscribe((response) => {
      window.location.reload();
      alert('Postagem excluída com sucesso!!');
    });
  }
}
