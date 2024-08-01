import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {TemplatesComponent} from "./templates/templates.component";
import {ContractComponent} from "./contract.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'templates'
  },
  {
    path: '',
    component: ContractComponent,
    children: [
      {
        path: 'company',
        component: CompanyComponent,
        data: {
          breadcrumb: 'CONTRACT.COMPANY'
        }
      },
      {
        path: 'templates',
        component: TemplatesComponent,
        data: {
          breadcrumb: 'CONTRACT.TEMPLATES.MANY'
        }
      },
      {
        path: 'search',
        component: SearchComponent,
        data: {
          breadcrumb: 'CONTRACT.SEARCH'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule {
}
