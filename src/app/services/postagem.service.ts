import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/postagem.model';
import { Response } from '../model/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  private url = `${environment.api}`;

  constructor(private http: HttpClient){
  }


  // getPostagens() : Observable<Response<Postagem[]>> {
  //   return this.http.get<Response<Postagem[]>>(this.url);
  // }

  getPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(this.url);
  }
  
  // //Está funcionando
  // getPostagens() {
  //   return this.http.get<Postagem[]>(this.url);
  // }

  criarPostagem(postagem: Postagem) : Observable<Response<Postagem[]>> {
    return this.http.post<Response<Postagem[]>>(this.url, postagem);
  }

  getPostagemId(id:number) : Observable<Postagem> {
    return this.http.get<Postagem>(`${this.url}/${id}`)
  }

  editar(postagem: Postagem){
    return this.http.put<Postagem>(`${this.url}/${postagem.id}`, postagem);
  }

  DeletarPostagem(id: number | null){
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
