import { Component, Input } from '@angular/core';



@Component({
  	selector: 'app-curso',
  	templateUrl: './curso.component.html',
  	styleUrls: ['./curso.component.css']
})



export class CursoComponent {


	@Input() curso: any = [];


	constructor() { }


}