import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';



const pagesRoutes: Routes = [{
        path: '', component: PagesComponent,
        children: [
            { path: 'inicio', component: InicioComponent, data: { titulo: 'Inicio'} },
            { path: 'agenda', component: AgendaComponent, data: { titulo: 'Agenda'} }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
