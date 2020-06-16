import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../core/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../layout/container/container.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';


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
];

@NgModule({
  declarations: [SidebarComponent, ContainerComponent, HeaderComponent],
  imports: [CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})

export class LayoutModule { }
