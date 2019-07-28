import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Importar modulo que contiene módulos individuales del proyecto
import { PagesModule } from './pages/pages.module';

// Importar rutas
import { APP_ROUTES } from './app.routes';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
