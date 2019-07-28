import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from './shared/nopage/nopage.component';


const appRoutes: Routes = [
    { path: '**', component: NopageComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });
