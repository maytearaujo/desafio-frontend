import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPostComponent } from "./components/card-post/card-post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-frontend';
}
