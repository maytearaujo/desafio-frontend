import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css',
})
export class MenuLateralComponent{

@Output() buscaChange = new EventEmitter<string>();

onInput(event: Event) {
  const valor = (event.target as HTMLInputElement).value;
  this.buscaChange.emit(valor);
}


}
