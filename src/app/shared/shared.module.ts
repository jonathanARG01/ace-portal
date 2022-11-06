// Angular
import { NgModule 	  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

// Components
import { MenuComponent 			} from './menu/menu.component';
import { NavbarComponent 		} from './navbar/navbar.component';
import { FooterComponent 		} from './footer/footer.component';
import { AppRoutingModule 		} from '../app-routing.module';
import { TitleComponent 		} from './title/title.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearcherComponent 		} from './searcher/searcher.component';
import { FilterComponent 		} from './filter/filter.component';
import { BreadcrumbComponent 	} from './breadcrumb/breadcrumb.component';
import { AvatarComponent 		} from './avatar/avatar.component';
import { StatusComponent 		} from './status/status.component';
import { RrssComponent 			} from './rrss/rrss.component';
import { RatingComponent 		} from './rating/rating.component';
// import { CarouselComponent 		} from './carousel/carousel.component';

// NGX Components
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule 	   } from 'ngx-bootstrap/rating';
import { ErrorPageComponent } from './error-page/error-page.component';






@NgModule({
  	declarations: [
		MenuComponent,
		NavbarComponent,
    	FooterComponent,
     	TitleComponent,
      	NotificationsComponent,
       	SearcherComponent,
        FilterComponent,
        BreadcrumbComponent,
        AvatarComponent,
        StatusComponent,
        RrssComponent,
        RatingComponent,
        ErrorPageComponent,
        // CarouselComponent
  	],
  	imports: [
    	CommonModule,
		AppRoutingModule,
		FormsModule,
		ProgressbarModule.forRoot(),
		RatingModule.forRoot()
  	],
	exports: [
		MenuComponent,
		NavbarComponent,
		FooterComponent,
     	TitleComponent,
		NotificationsComponent,
		SearcherComponent,
		FilterComponent,
		BreadcrumbComponent,
		RatingComponent,
		// CarouselComponent
	]
})



export class SharedModule { }
