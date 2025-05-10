import { Component, OnInit, EventEmitter } from '@angular/core';
import { Postagem } from '../../model/postagem.model';
import { PostagemService } from '../../services/postagem.service';
import { RouterModule } from '@angular/router';
import { MaismenosComponent } from '../maismenos/maismenos.component';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { HomeComponent } from '../../pages/home/home.component';
import { ErrorPageComponent } from "../../pages/error-page/error-page.component";

@Component({
  selector: 'app-card-post',
  standalone: true,
  imports: [RouterModule, MaismenosComponent, MenuLateralComponent, HomeComponent, ErrorPageComponent],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css',
})
export class CardPostComponent implements OnInit {
  postagems: Postagem[] = [];
  postagemsGeral: Postagem[] = [];

  termoBusca: string = '';

  quantidadeExibida: number = 4;

  get postagemsFiltrados() {
    return this.postagems.slice(0, this.quantidadeExibida);
  }

  verMais() {
    this.quantidadeExibida += 4;
  }

  constructor(private servicePostagem: PostagemService) {}

  ngOnInit(): void {
    this.servicePostagem.getPostagens().subscribe((response) => {
      this.postagems = response;
      this.postagemsGeral = response;

      // console.log(response)
    });
  }

  deletar(id: number | null) {
    this.servicePostagem.DeletarPostagem(id).subscribe((response) => {
      window.location.reload();
      alert('Postagem excluída com sucesso!!');
    });
  }

  search(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.termoBusca = target.value; 

    this.postagems = this.postagemsGeral.filter(postagem => {
      return postagem.title.toLowerCase().includes(value);
      
    })

  }
}
