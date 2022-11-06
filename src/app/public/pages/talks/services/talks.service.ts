import { Injectable } from '@angular/core';



@Injectable({
	providedIn: 'root'
})


export class TalksService {


	private _talks: any[] = [
		{
			id: '212988',
			nombre: 'Liderar para transformar 1',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		},
		{
			id: 'as7d78',
			nombre: 'Impacto de las emociones en el trabajo 2',
			fecha: '02/07/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk2.png'
		},
		{
			id: '781hns',
			nombre: 'Tres cuentos para empezar el día 3',
			fecha: '18/10/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk3.png'
		},
		{
			id: '98sajj',
			nombre: 'Liderar para transformar 4',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		},
		{
			id: '72h10cc',
			nombre: 'Impacto de las emociones en el trabajo 5',
			fecha: '02/07/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk2.png'
		},
		{
			id: '8as8jmas',
			nombre: 'Tres cuentos para empezar el día 6',
			fecha: '18/10/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk3.png'
		},
		{
			id: '98891d',
			nombre: 'Liderar para transformar 7',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		},
		{
			id: 'qp2001',
			nombre: 'Impacto de las emociones en el trabajo 8',
			fecha: '02/07/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk2.png'
		},
		{
			id: 'i9a0pp',
			nombre: 'Tres cuentos para empezar el día 9',
			fecha: '18/10/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk3.png'
		},
		{
			id: 'kkald90a',
			nombre: 'Liderar para transformar 10',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		},
		{
			id: '66bahjkd',
			nombre: 'Impacto de las emociones en el trabajo 11',
			fecha: '02/07/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk2.png'
		},
		{
			id: '7a7a7ha',
			nombre: 'Tres cuentos para empezar el día 12',
			fecha: '18/10/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk3.png'
		},
		{
			id: 'mzmznck',
			nombre: 'Liderar para transformar 13',
			fecha: '01/05/2022',
			descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis sit odio sequi laudantium, modi commodi dicta enim assumenda et amet ab error. Reiciendis, aliquam sed. Odio quae consequuntur nam asperiores.',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		}
	]


	get talks () {
		return [ ...this._talks ];
	}


	constructor() { }


}
