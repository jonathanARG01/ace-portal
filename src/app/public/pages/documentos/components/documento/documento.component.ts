import { Component, Input } from '@angular/core';



@Component({
  	selector: 'app-documento',
  	templateUrl: './documento.component.html',
  	styleUrls: ['./documento.component.css']
})



export class DocumentoComponent {


	@Input() documento: any = [];


  	constructor() {}
	

	addFavorities( id: string ) {
		console.log('Agregando a favoritos', id);
	}


}
