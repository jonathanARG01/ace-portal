import { Component } from '@angular/core';
import { RatingConfig } from 'ngx-bootstrap/rating';



// such override allows to keep some initial values
export function getRatingConfig(): RatingConfig {
	return Object.assign(new RatingConfig(), { ariaLabel: 'My Rating' });
}



@Component({
  	selector: 'app-rating',
  	templateUrl: './rating.component.html',
  	styleUrls: ['./rating.component.css'],
	providers: [{ provide: RatingConfig, useFactory: getRatingConfig }]
})



export class RatingComponent {


	max = 1;
  	rate = 0;


  	constructor() { }
	

}
