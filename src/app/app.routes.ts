import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { QuienesSomos } from './features/quienes-somos/quienes-somos';
import { Federaciones } from './features/federaciones/federaciones';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Red Vecinal Andaluza – Inicio',
  },
  {
    path: 'quienes-somos',
    component: QuienesSomos,
    title: 'Quiénes Somos – RedVS',
  },
  {
    path: 'federaciones',
    component: Federaciones,
    title: 'Federaciones – RedVS',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
