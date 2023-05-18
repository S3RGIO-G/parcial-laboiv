import { Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

export const routes : Routes = [

  {
    path:'',
    redirectTo: 'bienvenido',
    pathMatch: 'full', 
  }, 
  {
    path:'bienvenido',
    title:'Bienvenido',
    loadComponent:() => import('./pages/bienvenido/bienvenido.component').then( m => m.BienvenidoComponent),
  }, 
  {
    path:'login',
    title:'Iniciar Sesión',
    loadComponent:() => import('./pages/login/login.component').then( m => m.LoginComponent),
    
  }, 
  {
    path:'repartidor/alta',
    title:'Alta Repartidor',
    loadComponent:() => import('./pages/repartidor-alta/repartidor-alta.component').then( m => m.RepartidorAltaComponent),
    canActivate:[LoginGuard]
    
  }, 
  // {
  //   path:'repartidor/detalle',
  //   title:'Detalle Repartidor',
  //   loadComponent:() => import('./pages/repartidor-detalle/repartidor-detalle.component').then( m => m.RepartidorDetalleComponent),
  //   canActivate:[LoginGuard]
  // }, 
  {
    path:'**',
    redirectTo: 'bienvenido',
    pathMatch: 'full',    
  }, 



]