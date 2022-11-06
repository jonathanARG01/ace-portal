// Angular
import { Component } from '@angular/core';

// Services
import { CursosService } from '../../services/cursos.service';



@Component({
	selector: 'app-cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css']
})



export class CursosComponent {


	categorias: any = [];
	cursos: any = [];


	constructor( private cursosService: CursosService ) {
		this.cursos = this.cursosService.cursos;
		this.categorias = this.cursosService.categorias;
	}
	

}
