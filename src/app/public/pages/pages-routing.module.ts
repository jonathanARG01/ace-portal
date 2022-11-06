// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent 		   } from './home/pages/home.component';
import { CursosComponent 	   } from './cursos/pages/page/cursos.component';
import { VerCursoComponent 	   } from './cursos/pages/ver-curso/ver-curso.component';
import { DocumentosComponent   } from './documentos/page/documentos.component';
import { TestsComponent 	   } from './tests/pages/page/tests.component';
import { VerTestComponent 	   } from './tests/pages/ver-test/ver-test.component';
import { TalksComponent 	   } from './talks/pages/page/talks.component';
import { VerTalkComponent 	   } from './talks/pages/ver-talk/ver-talk.component';
import { ContenidosComponent   } from './contenidos/pages/contenidos.component';
import { EvaluacionesComponent } from './evaluaciones/pages/evaluaciones.component';



const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'inicio',
				component: HomeComponent
			},
			{
				path: 'cursos',
				component: CursosComponent
			},
			{
				path: 'curso/:id',
				component: VerCursoComponent
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
				path: 'test/:id',
				component: VerTestComponent
			},
			{
				path: 'talks',
				component: TalksComponent
			},
			{
				path: 'talk/:id',
				component: VerTalkComponent
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
				redirectTo: 'inicio'
			}
		]
	}
]



@NgModule({
  	declarations: [],
  	imports: [
		RouterModule.forChild( routes )
  	],
	exports: [
		RouterModule
	]
})



export class PagesRoutingModule { }
