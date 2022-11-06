// Angular
import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule       } from '../../shared/shared.module';

// Pages and components
import { HomeComponent         } from './home/pages/home.component';
import { CursosComponent       } from './cursos/pages/page/cursos.component';
import { CursoComponent        } from './cursos/components/curso/curso.component';
import { VerCursoComponent     } from './cursos/pages/ver-curso/ver-curso.component';
import { DocumentosComponent   } from './documentos/page/documentos.component';
import { TestsComponent        } from './tests/pages/page/tests.component';
import { TestComponent         } from './tests/components/test/test.component';
import { VerTestComponent      } from './tests/pages/ver-test/ver-test.component';
import { TalksComponent        } from './talks/pages/page/talks.component';
import { TalkComponent         } from './talks/components/talk/talk.component';
import { VerTalkComponent      } from './talks/pages/ver-talk/ver-talk.component';
import { ContenidosComponent   } from './contenidos/pages/contenidos.component';
import { EvaluacionesComponent } from './evaluaciones/pages/evaluaciones.component';
import { DocumentoComponent    } from './documentos/components/documento/documento.component';

// NGX Components
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { CarouselModule    } from 'ngx-bootstrap/carousel';



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
        EvaluacionesComponent,
        VerTalkComponent,
        VerTestComponent,
        CursoComponent,
        VerCursoComponent
	],
  	imports: [
    	CommonModule,
        SharedModule,
        ProgressbarModule.forRoot(),
        CarouselModule.forRoot(),
        PagesRoutingModule,
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
