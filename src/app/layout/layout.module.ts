import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../core/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../layout/container/container.component';
import { from } from 'rxjs';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'user',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'regions',
        loadChildren: () => import('../regions/regions.module').then(m => m.RegionsModule),
        canLoad: [AuthGuard]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      }
    ]
  }
]


@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)

  ]
})
export class LayoutModule { }
