import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Modules
import { SharedModule } from '../../shared/shared.module';


// Pages
import { HomeComponent         } from './home/pages/home.component';
import { CursosComponent       } from './cursos/pages/cursos.component';
import { DocumentosComponent   } from './documentos/page/documentos.component';
import { TestsComponent        } from './tests/pages/tests.component';
import { TalksComponent        } from './talks/pages/talks.component';
import { ContenidosComponent   } from './contenidos/pages/contenidos.component';
import { EvaluacionesComponent } from './evaluaciones/pages/evaluaciones.component';
import { DocumentoComponent    } from './documentos/components/documento/documento.component';
import { TestComponent         } from './tests/components/test/test.component';



// NGX Components
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TalkComponent } from './talks/components/talk/talk.component';



@NgModule({
  	declarations: [
		HomeComponent,
        CursosComponent,
        DocumentosComponent,
        DocumentoComponent,
        TestsComponent,
        TestComponent,
        TalksComponent,
        TalkComponent,
        ContenidosComponent,
        EvaluacionesComponent
	],
  	imports: [
    	CommonModule,
        SharedModule,
        ProgressbarModule.forRoot(),
  	],
    exports: [
        HomeComponent,
        CursosComponent,
        DocumentosComponent,
        TestsComponent,
        TalksComponent,
        ContenidosComponent,
        EvaluacionesComponent
    ]
})



export class PagesModule { }
