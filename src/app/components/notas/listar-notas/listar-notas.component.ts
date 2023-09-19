import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { NotaService } from '../../../services/nota.service';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from 'src/app/models/categoria';

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