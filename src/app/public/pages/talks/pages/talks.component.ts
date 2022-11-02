// Angular
import { Component } from '@angular/core';

// Services
import { TalksService } from '../services/talks.service';



@Component({
  	selector: 'app-talks',
  	templateUrl: './talks.component.html',
  	styleUrls: ['./talks.component.css']
})



export class TalksComponent {


	talks: any = [];


	constructor( private talksService: TalksService ) {
		this.talks = this.talksService.talks;
	}


}
