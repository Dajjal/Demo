import {NgModule} from '@angular/core';
import {ContractComponent} from './contract.component';
import {CompanyComponent} from './company/company.component';
import {TemplatesComponent} from './templates/templates.component';
import {ContractRoutingModule} from "./contract-routing.module";
import {SharedModule} from "../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {SearchComponent} from './search/search.component';
import {CreateTemplateComponent} from './templates/create-template/create-template.component';
import {NgxEditorModule} from "ngx-editor";

@NgModule({
  imports: [
    FormsModule,
    TranslateModule,
    ContractRoutingModule,
    SharedModule,
    NgxEditorModule
  ],
  declarations: [
    ContractComponent,
    CompanyComponent,
    TemplatesComponent,
    SearchComponent,
    CreateTemplateComponent,
  ]
})
export class ContractModule {
}
