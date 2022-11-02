// Angular
import { NgModule          } from '@angular/core';
import { BrowserModule     } from '@angular/platform-browser';

// Components
import { AppComponent  } from './app.component';

// Modules
import { SharedModule } from './shared/shared.module';
import { PagesModule  } from './public/pages/pages.module';

// Routes
import { AppRoutingModule } from './app-routing.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        PagesModule
    ],
    exports: [
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})



export class AppModule { }
