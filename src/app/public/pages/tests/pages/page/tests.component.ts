// Angular
import { Component } from '@angular/core';

// Services
import { TestsService } from '../../services/tests.service';



@Component({
  	selector: 'app-tests',
  	templateUrl: './tests.component.html',
  	styleUrls: ['./tests.component.css']
})



export class TestsComponent {


	tests: any = [];

	
	constructor( private testsService: TestsService ) {
		this.tests = this.testsService.tests;
	}

	
}
