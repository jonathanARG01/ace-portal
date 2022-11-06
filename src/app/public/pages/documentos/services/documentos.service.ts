import { Injectable } from '@angular/core';



@Injectable({
  	providedIn: 'root'
})



export class DocumentosService {


	private _documentos: any[] = [
		{
			id: '88918921889',
			nombre: 'Brief Presentación',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '7919019090',
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '109921082',
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '190100101',
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '1111029922',
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '7821782787200',
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '00009999918',
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '7281818188181',
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '88191928365',
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '28892189218',
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '12323233232',
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '34343443434',
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '454545454554',
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '565656565665',
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '676767676776',
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '787878787878',
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '898989898989',
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '9090909090909',
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '000001010991',
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '29292929283',
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '8838383874783',
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '74747488474747',
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			id: '65656565656782919947',
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		}
	]


	get documentos () {
		return [ ...this._documentos ];
	}

}
