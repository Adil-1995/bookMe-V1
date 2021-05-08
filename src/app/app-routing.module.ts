import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DisponibilidadComponent } from './pages/disponibilidad/disponibilidad.component';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
   { path: '', component: LoginComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'disponibilidad', component: DisponibilidadComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  PagesComponent,
  LoginComponent,
  DisponibilidadComponent,
  NotificacionesComponent,
  HeaderComponent,
  FooterComponent
];
