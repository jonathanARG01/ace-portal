// Angular
import { Component } from '@angular/core';

// Services
import { TalksService } from '../../talks/services/talks.service';



@Component({
  	selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css']
})



export class HomeComponent {


	talks: any = [];


	constructor( private talksService: TalksService ) {
		this.talks = this.talksService.talks;
	}

	itemsPerSlide = 3;
	singleSlideOffset = false;
	noWrap = false;
	 
	slidesChangeMessage = '';

	onSlideRangeChange(indexes: number[]|void): void {
		this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
	}

}
