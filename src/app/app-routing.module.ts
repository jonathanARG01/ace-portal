// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes   } from '@angular/router';

// Pages
import { HomeComponent         } from './public/pages/home/pages/home.component';
import { CursosComponent       } from './public/pages/cursos/pages/cursos.component';
import { DocumentosComponent   } from './public/pages/documentos/page/documentos.component';
import { TestsComponent        } from './public/pages/tests/pages/tests.component';
import { TalksComponent        } from './public/pages/talks/pages/talks.component';
import { ContenidosComponent   } from './public/pages/contenidos/pages/contenidos.component';
import { EvaluacionesComponent } from './public/pages/evaluaciones/pages/evaluaciones.component';



const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'cursos',
        component: CursosComponent
    },
    {
        path: 'documentos',
        component: DocumentosComponent
    },
    {
        path: 'tests',
        component: TestsComponent
    },
    {
        path: 'talks',
        component: TalksComponent
    },
    {
        path: 'contenidos',
        component: ContenidosComponent
    },
    {
        path: 'evaluaciones',
        component: EvaluacionesComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];



@NgModule({
    imports: [
        RouterModule.forRoot( routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})



export class AppRoutingModule {}