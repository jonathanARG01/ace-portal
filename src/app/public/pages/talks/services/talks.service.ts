import { Injectable } from '@angular/core';



@Injectable({
	providedIn: 'root'
})


export class TalksService {


	private _talks: any[] = [
		{
			nombre: 'Liderar para transformar',
			fecha: '01/05/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		},
		{
			nombre: 'Impacto de las emociones en el trabajo',
			fecha: '02/07/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk2.png'
		},
		{
			nombre: 'Tres cuentos para empezar el día',
			fecha: '18/10/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk3.png'
		},
		{
			nombre: 'Liderar para transformar',
			fecha: '01/05/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		},
		{
			nombre: 'Impacto de las emociones en el trabajo',
			fecha: '02/07/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk2.png'
		},
		{
			nombre: 'Tres cuentos para empezar el día',
			fecha: '18/10/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk3.png'
		},
		{
			nombre: 'Liderar para transformar',
			fecha: '01/05/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		},
		{
			nombre: 'Impacto de las emociones en el trabajo',
			fecha: '02/07/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk2.png'
		},
		{
			nombre: 'Tres cuentos para empezar el día',
			fecha: '18/10/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk3.png'
		},
		{
			nombre: 'Liderar para transformar',
			fecha: '01/05/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		},
		{
			nombre: 'Impacto de las emociones en el trabajo',
			fecha: '02/07/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk2.png'
		},
		{
			nombre: 'Tres cuentos para empezar el día',
			fecha: '18/10/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk3.png'
		},
		{
			nombre: 'Liderar para transformar',
			fecha: '01/05/2022',
			link: 'https://www.youtube.com/watch?v=S9-WnNYe3E4',
			miniatura: './../../../../assets/talk1.png'
		}
	]


	get talks () {
		return [ ...this._talks ];
	}


	constructor() { }


}
