import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'account',
        children: [
          {
            path:'',
            loadChildren: ()=> import ('../pages/account/account.module').then(m=>m.AccountPageModule)
          }
        ]
      },
      {
        path: 'main',
        children: [
          {
            path:'',
            loadChildren: ()=> import ('../pages/main/main.module').then(m=>m.MainPageModule)
          }
        ]
      },
      {
        path: 'statistics',
        children: [
          {
            path:'',
            loadChildren: ()=> import ('../pages/statistics/statistics.module').then(m=>m.StatisticsPageModule)
          }
        ]
      },
      {
        path: 'alerts',
        children: [
          {
            path:'',
            loadChildren: ()=> import ('../pages/alerts/alerts.module').then(m=>m.AlertsPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: 'main',
        pathMatch: 'full'
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
