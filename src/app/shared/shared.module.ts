import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RigthbarComponent } from './rigthbar/rigthbar.component';
import { NopageComponent } from './nopage/nopage.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    RigthbarComponent,
    NopageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  // Cada modulo a utilizar en otras partes del proyecto deben ser incluidas en los exports
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    RigthbarComponent,
    NopageComponent
  ]
})
export class SharedModule { }
