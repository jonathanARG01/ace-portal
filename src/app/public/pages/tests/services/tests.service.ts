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
			nombre: 'Industrias en las que nos enfocamos',
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
			nombre: 'Organigrama',
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
			nombre: 'Micro Conductas Ace',
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
			nombre: 'Área Comercial',
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
			id: '06',
			nombre: 'Área Producción',
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
			id: '07',
			nombre: 'Herramientas Colaborativas',
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
			id: '08',
			nombre: 'Metodologías ágiles',
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
			id: '09',
			nombre: 'Ace Team',
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
