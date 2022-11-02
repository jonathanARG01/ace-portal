import { AstTransformer } from '@angular/compiler';
import { Injectable } from '@angular/core';



@Injectable({
 	providedIn: 'root'
})



export class TestsService {


	private _tests: any[] = [
		{
			id: '01',
			nombre: 'Visión de la Agencia',
			preguntas: {
				'¿Lorem ipsum dolor sit ipsum dolor sit?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				},
				'¿Lorem ipsum dolor sit ipsum dolor?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				}
			},
			estado: {
				0: 'no iniciado',
				1: 'aprobado',
				2: 'rechazado',
				3: 'incompleto'
			}
		},
		{
			id: '02',
			nombre: 'Visión de la Agencia',
			preguntas: {
				'¿Lorem ipsum dolor sit ipsum dolor sit?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				},
				'¿Lorem ipsum dolor sit ipsum dolor?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				}
			},
			estado: {
				0: 'no iniciado',
				1: 'aprobado',
				2: 'rechazado',
				3: 'incompleto'
			}
		},
		{
			id: '03',
			nombre: 'Visión de la Agencia',
			preguntas: {
				'¿Lorem ipsum dolor sit ipsum dolor sit?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				},
				'¿Lorem ipsum dolor sit ipsum dolor?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				}
			},
			estado: {
				0: 'no iniciado',
				1: 'aprobado',
				2: 'rechazado',
				3: 'incompleto'
			}
		},
		{
			id: '04',
			nombre: 'Visión de la Agencia',
			preguntas: {
				'¿Lorem ipsum dolor sit ipsum dolor sit?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				},
				'¿Lorem ipsum dolor sit ipsum dolor?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				}
			},
			estado: {
				0: 'no iniciado',
				1: 'aprobado',
				2: 'rechazado',
				3: 'incompleto'
			}
		},
		{
			id: '05',
			nombre: 'Visión de la Agencia',
			preguntas: {
				'¿Lorem ipsum dolor sit ipsum dolor sit?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				},
				'¿Lorem ipsum dolor sit ipsum dolor?': {
					alternativa1: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa2: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa3: 'Lorem ipsum dolor sit amet, consetetur',
					alternativa4: 'Lorem ipsum dolor sit amet, consetetur'
				}
			},
			estado: {
				0: 'no iniciado',
				1: 'aprobado',
				2: 'rechazado',
				3: 'incompleto'
			}
		}
	]


	get tests () {
		return [ ...this._tests ];
	}


	constructor() { }


}
