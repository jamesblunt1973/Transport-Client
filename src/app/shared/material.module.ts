import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  exports:
    [MatIconModule,
      MatCardModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
