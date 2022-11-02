import { Component } from '@angular/core';



@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.css']
})



export class NotificationsComponent {


	notificaciones: any = [
		{
			nombre: 'Visión de la agencia',
			tiempo: 'Hace 8 horas',
			imagen: './../../../../assets/notificacion1.png'
		},
		{
			nombre: 'Semana octubre',
			tiempo: 'Hace 12 horas',
			imagen: './../../../../assets/notificacion2.png'
		},
		{
			nombre: 'Visión de la agencia',
			tiempo: 'Hace 8 horas',
			imagen: './../../../../assets/notificacion1.png'
		},
		{
			nombre: 'Semana octubre',
			tiempo: 'Hace 12 horas',
			imagen: './../../../../assets/notificacion2.png'
		}
	]


	constructor() { }
	

}
