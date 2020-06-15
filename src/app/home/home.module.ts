import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: 'company', component: CompanyComponent }
]
@NgModule({
  declarations: [CompaniesComponent, CompanyComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
