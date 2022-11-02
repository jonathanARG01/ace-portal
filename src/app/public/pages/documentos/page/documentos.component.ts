// Angular
import { Component } from '@angular/core';

// Services
import { DocumentosService } from '../services/documentos.service';



@Component({
	selector: 'app-documentos',
	templateUrl: './documentos.component.html',
	styleUrls: ['./documentos.component.css']
})



export class DocumentosComponent {


	documentos: any = [];

	
	constructor( private documentosService: DocumentosService ) {
		this.documentos = this.documentosService.documentos;
	}

}
