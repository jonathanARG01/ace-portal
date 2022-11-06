import { Injectable } from '@angular/core';



@Injectable({
  	providedIn: 'root'
})



export class CursosService {


    categorias: any = ['productos', 'procesos', 'cultura', 'tecnología'];
	

	private _cursos: any[] = [
		{
			id: 'cur19199',
			nombre: 'Visión de la Agencia',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png',
			encargado: 'Jonathan Rojas',
			categoria: this.categorias[0]
		},
		{
			id: 'cur818981',
			nombre: 'Industrias en las que nos enfocamos',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png',
			encargado: 'Jonathan Rojas',
			categoria: this.categorias[0]
		},
		{
			id: 'cur01010',
			nombre: 'Organigrama',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png',
			encargado: 'Jonathan Rojas',
			categoria: this.categorias[0]
		},
		{
			id: 'cur7a7a79',
			nombre: 'Visión de la Agencia',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png',
			encargado: 'Jonathan Rojas',
			categoria: this.categorias[1]
		},
		{
			id: 'cur00009',
			nombre: 'Industrias en las que nos enfocamos',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png',
			encargado: 'Jonathan Rojas',
			categoria: this.categorias[1]
		},
		{
			id: 'cur16267',
			nombre: 'Organigrama',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png',
			encargado: 'Jonathan Rojas',
			categoria: this.categorias[1]
		},
		{
			id: 'curhuh77a',
			nombre: 'Visión de la Agencia',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png',
			encargado: 'Jonathan Rojas',
			categoria: this.categorias[2]
		},
		{
			id: 'cur999ww9',
			nombre: 'Industrias en las que nos enfocamos',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png',
			encargado: 'Jonathan Rojas',
			categoria: this.categorias[2]
		},
		{
			id: 'cur13132452',
			nombre: 'Organigrama',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png',
			encargado: 'Jonathan Rojas',
			categoria: this.categorias[2]
		}
	]


	get cursos () {
		return [ ...this._cursos ];
	}


	constructor() { }


}
