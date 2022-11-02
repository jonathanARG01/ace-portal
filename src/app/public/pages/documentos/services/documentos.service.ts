import { Injectable } from '@angular/core';



@Injectable({
  	providedIn: 'root'
})



export class DocumentosService {


	private _documentos: any[] = [
		{
			nombre: 'Brief Presentación',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Diseño',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Ace Team Talks',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación Medios',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		},
		{
			nombre: 'Presentación TI',
			link: 'https://bibliotecaia.ism.edu.ec/Repo-book/h/HarryPotterylaPiedraFilosofal.pdf'
		}
	]


	get documentos () {
		return [ ...this._documentos ];
	}

}
