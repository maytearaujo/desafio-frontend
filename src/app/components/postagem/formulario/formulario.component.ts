import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Postagem } from '../../../model/postagem.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  
  @Output() onSubimit = new EventEmitter<Postagem>()

  postagemForm!:FormGroup;
  
  ngOnInit(): void {
    createdAt: new Date().toISOString(),
    
    this.postagemForm = new FormGroup({
      id: new FormControl(0),
      title: new FormControl(''),
      image: new FormControl(''),
      body:new FormControl(''),
      createdAt: new FormControl('')
    });
  }
  

  submit(){
    this.postagemForm.patchValue({
      createdAt: new Date().toISOString()
    });
  
    // console.log(this.postagemForm.value);

    this.onSubimit.emit(this.postagemForm.value)
  }
}
