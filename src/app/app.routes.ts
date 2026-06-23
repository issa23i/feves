import { Routes } from '@angular/router';
import { AvisoLegal } from './features/aviso-legal/aviso-legal';
import { Federaciones } from './features/federaciones/federaciones';
import { Home } from './features/home/home';
import { Privacidad } from './features/privacidad/privacidad';
import { QuienesSomos } from './features/quienes-somos/quienes-somos';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Inicio - Confederación Provincial Red Vecinal de Sevilla',
    data: {
      seo: {
        title: 'Inicio',
        description:
          'Confederación Provincial Red Vecinal de Sevilla, confederación provincial de entidades vecinales de Sevilla.',
        keywords: ['RPVS', 'Confederación Provincial Red Vecinal de Sevilla', 'movimiento vecinal sevillano'],
      },
    },
  },
  {
    path: 'quienes-somos',
    component: QuienesSomos,
    title: 'Quienes somos - RPVS',
    data: {
      seo: {
        title: 'Quienes somos',
        description:
          'Conoce RPVS, la Confederación Provincial Red Vecinal de Sevilla y su trabajo provincial con federaciones vecinales.',
        keywords: ['quienes somos RPVS', 'confederación vecinal Sevilla'],
      },
    },
  },
  {
    path: 'federaciones',
    component: Federaciones,
    title: 'Federaciones - RPVS',
    data: {
      seo: {
        title: 'Federaciones',
        description:
          'Federación Nazarena, Federación UTER y FEVES, entidades federadas en la Confederación Provincial Red Vecinal de Sevilla.',
        keywords: ['federaciones vecinales Sevilla', 'FEVES', 'Federación UTER', 'Federación Nazarena'],
      },
    },
  },
  {
    path: 'privacidad',
    component: Privacidad,
    title: 'Privacidad - RPVS',
  },
  {
    path: 'aviso-legal',
    component: AvisoLegal,
    title: 'Aviso legal - RPVS',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
