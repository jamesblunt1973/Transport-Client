import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [],
  exports:
    [ MatIconModule,
      MatCardModule,
      MatSidenavModule,
      MatListModule],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
