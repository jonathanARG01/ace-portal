import { Component, OnInit } from '@angular/core';
import { ActivatedRoute    } from '@angular/router';



@Component({
  	selector: 'app-ver-talk',
  	templateUrl: './ver-talk.component.html',
  	styleUrls: ['./ver-talk.component.css']
})



export class VerTalkComponent implements OnInit {


	constructor( private activatedRoute: ActivatedRoute ) { }


	ngOnInit(): void {

		this.activatedRoute.params
			.subscribe( ({ id }) => {

				console.log( id );
			
			});

	}
	

}
