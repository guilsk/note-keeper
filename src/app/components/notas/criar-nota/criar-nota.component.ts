import { Component } from '@angular/core';
import { Nota } from 'src/app/models/nota';
import { NotaService } from '../../../services/nota.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css'],
})
export class CriarNotaComponent {
  nota: Nota;
  categorias: Categoria[] = []

  constructor(private notaService: NotaService, private router: Router, private toastService: ToastrService, private categoriaService: CategoriaService) {
    this.nota = new Nota('', '', 'dark', 0, 1);
  }

  carregarCategorias(){
    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias
    })
  }

  criarNota() {
    this.notaService.criar(this.nota).subscribe((nota) => {
      this.toastService.success(`Nota ${nota.titulo} criada com sucesso.`, 'Sucesso');

      this.router.navigate(['/notas', 'listar']);
    });
  }
}