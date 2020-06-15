import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../core/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../layout/container/container.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule,
    SharedModule,
    RouterModule],
  exports: [],
  providers: [],
})
export class FeatureModule { }

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
        path: '',
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
