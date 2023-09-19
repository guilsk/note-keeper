import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent {
  categoria: Categoria

  constructor(private categoriService: CategoriaService, private router: Router, private toastService: ToastrService){
    this.categoria = new Categoria('')
  }

  criarCategoria(){
    this.categoriService.criar(this.categoria).subscribe((categoria) => {
      this.toastService.success(`Categoria ${categoria.titulo} criada com sucesso.`, 'Sucesso')
    
      this.router.navigate(['/categorias', 'listar'])
    })
  }
}
