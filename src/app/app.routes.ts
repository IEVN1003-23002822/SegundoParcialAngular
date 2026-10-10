import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'formulario',
    children: [
      {
        path: 'distancia',
        loadComponent: () =>
          import('./formulario/distancia/distancia').then((c) => c.Distancia),
      },
      {
        path: 'zodiaco',
        loadComponent: () =>
          import('./formulario/zodiaco/zodiaco').then((c) => c.ZodiacoComponent),
      },
    ],
  },
  {
    path: 'escuela',
    loadComponent: () =>
      import('./escuela/lista-escuela/lista-escuela').then((c) => c.ListaEscuela),
  },
  {
    path: 'cinepolis',
    loadComponent: () =>
      import('./escuela/cinepolis/cinepolis').then((c) => c.Cinepolis),
  },
  {
    path: 'venta',
    loadComponent: () =>
      import('./escuela/venta/venta').then((c) => c.Venta),
  },
  { path: '', redirectTo: 'formulario/zodiaco', pathMatch: 'full' },
  { path: '**', redirectTo: 'formulario/zodiaco' },
];