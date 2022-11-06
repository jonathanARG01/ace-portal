// Angular
import { NgModule             } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent         } from './public/pages/home/pages/home.component';
import { CursosComponent       } from './public/pages/cursos/pages/page/cursos.component';
import { VerCursoComponent     } from './public/pages/cursos/pages/ver-curso/ver-curso.component';
import { DocumentosComponent   } from './public/pages/documentos/page/documentos.component';
import { TestsComponent        } from './public/pages/tests/pages/page/tests.component';
import { VerTestComponent      } from './public/pages/tests/pages/ver-test/ver-test.component';
import { TalksComponent        } from './public/pages/talks/pages/page/talks.component';
import { VerTalkComponent      } from './public/pages/talks/pages/ver-talk/ver-talk.component';
import { ContenidosComponent   } from './public/pages/contenidos/pages/contenidos.component';
import { EvaluacionesComponent } from './public/pages/evaluaciones/pages/evaluaciones.component';
import { ErrorPageComponent    } from './shared/error-page/error-page.component';



const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
    },
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
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: '404'
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




// // Angular
// import { NgModule             } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// // Pages
// import { ErrorPageComponent    } from './shared/error-page/error-page.component';



// const routes: Routes = [
//     {
//         path: 'auth',
//         loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
//     },
//     {
//         path: '',
//         loadChildren: () => import('./public/pages/pages.module').then( m => m.PagesModule )
//     },
//     {
//         path: '404',
//         component: ErrorPageComponent
//     },
//     {
//         path: '**',
//         redirectTo: '404'
//     }
// ];



// @NgModule({
//     imports: [
//         RouterModule.forRoot( routes, { useHash: true } )
//     ],
//     exports: [
//         RouterModule
//     ]
// })



// export class AppRoutingModule {}