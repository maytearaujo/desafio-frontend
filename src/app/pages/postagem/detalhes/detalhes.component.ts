import { Component, Input, OnInit } from '@angular/core';
import { Postagem } from '../../../model/postagem.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostagemService } from '../../../services/postagem.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {
  @Input() titulo!: string;
  @Input() corpo!: string;
  @Input() imagem!: string;

  postagem!: Postagem;

  constructor(private servicePostagem: PostagemService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.servicePostagem.getPostagemId(id).subscribe(response => {
      this.postagem = response;
    })
  }
}
