// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { TitleComponent } from './title/title.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  	declarations: [
		MenuComponent,
		NavbarComponent,
    	FooterComponent,
     	TitleComponent,
      	NotificationsComponent
  	],
  	imports: [
    	CommonModule,
		AppRoutingModule
  	],
	exports: [
		MenuComponent,
		NavbarComponent,
		FooterComponent,
     	TitleComponent,
		NotificationsComponent
	]
})



export class SharedModule { }
