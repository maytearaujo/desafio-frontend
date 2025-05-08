import { Component } from '@angular/core';
import { CardPostComponent } from "../../components/card-post/card-post.component";
import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPostComponent, MenuLateralComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
