import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css'],
})
export class ListarNotasComponent implements OnInit {
  notas: Nota[] = []
  categorias: Categoria[] = []

  constructor(private notaService: NotaService, private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.notaService.selecionarTodos().subscribe((notas: Nota[]) => {
      this.notas = notas;
    })

    this.categoriaService.selecionarTodos().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias
    })
  }
}