import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './list/details/details.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
