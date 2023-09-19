import { Component } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent {
  categorias: Categoria[] = []

  constructor(private categoriaService: CategoriaService){}

  ngOnInit(): void{
    this.categoriaService.selecionarTodos().subscribe((categorias: Categoria[]) =>{
      this.categorias = categorias
    })
  }
}
