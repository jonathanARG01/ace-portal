import { Component, OnInit } from '@angular/core';
import { ActivatedRoute    } from '@angular/router';



@Component({
  	selector: 'app-ver-curso',
  	templateUrl: './ver-curso.component.html',
  	styleUrls: ['./ver-curso.component.css']
})



export class VerCursoComponent implements OnInit {

	
	constructor( private activatedRoute: ActivatedRoute ) { }


	ngOnInit(): void {

		this.activatedRoute.params
			.subscribe( ({ id }) => {

				console.log( id );
			
			});

	}


}
