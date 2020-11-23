import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },  {
    path: 'history',
    loadChildren: () => import('./tabs/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./tabs/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./tabs/community/community.module').then( m => m.CommunityPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./tabs/main/main.module').then( m => m.MainPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
