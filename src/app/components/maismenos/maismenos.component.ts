import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-maismenos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maismenos.component.html',
  styleUrl: './maismenos.component.css'
})
export class MaismenosComponent implements OnInit {

  @Input() id!: number;
  @Input() text: string = '';
  @Input() wordLimit: number = 150;
  showMore: boolean = false;

  ngOnInit(): void {
    this.showMore = false;
  }

}
