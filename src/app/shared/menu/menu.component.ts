import { Component } from '@angular/core';



@Component({
  	selector: 'app-menu',
  	templateUrl: './menu.component.html',
  	styleUrls: ['./menu.component.css']
})



export class MenuComponent {


	paginas: any = [
		{
			nombre: 'Cursos',
			link: 'cursos'
		},
		{
			nombre: 'Documentos',
			link: 'documentos'
		},
		{
			nombre: 'Mis test',
			link: 'tests'
		},
		{
			nombre: 'Ace team talks',
			link: 'talks'
		},
		{
			nombre: 'Mi contenido',
			link: 'contenidos'
		},
		{
			nombre: 'Evaluación de desempeño',
			link: 'evaluaciones'
		}
	];

}
