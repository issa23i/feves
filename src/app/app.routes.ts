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
    title: 'Red Vecinal Sevilla - RPVS y FEVES',
    data: {
      seo: {
        title: 'Red Vecinal Sevilla',
        description:
          'Red Vecinal Sevilla, Confederación Provincial Red Vecinal de Sevilla: RPVS, FEVES, federaciones vecinales y AAVV de Sevilla.',
        keywords: ['Red Vecinal Sevilla', 'RPVS', 'FEVES', 'Confederación Provincial Red Vecinal de Sevilla', 'movimiento vecinal sevillano'],
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
          'Conoce Red Vecinal Sevilla, RPVS y su trabajo provincial con FEVES, federaciones vecinales y AAVV de Sevilla.',
        keywords: ['quienes somos RPVS', 'Red Vecinal Sevilla', 'confederación vecinal Sevilla'],
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
          'Federación Nazarena, Federación UTER y FEVES, entidades federadas en Red Vecinal Sevilla y AAVV de la provincia.',
        keywords: ['federaciones vecinales Sevilla', 'Red Vecinal Sevilla', 'FEVES', 'AAVV Sevilla', 'Federación UTER', 'Federación Nazarena'],
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
