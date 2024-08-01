import {NgModule} from '@angular/core';
import {NzAffixModule} from "ng-zorro-antd/affix";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzAnchorModule} from "ng-zorro-antd/anchor";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzBackTopModule} from "ng-zorro-antd/back-top";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzCalendarModule} from "ng-zorro-antd/calendar";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NzCascaderModule} from "ng-zorro-antd/cascader";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzCommentModule} from "ng-zorro-antd/comment";
// import {NzCronExpressionModule} from "ng-zorro-antd/cron-expression";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NZ_I18N, NzI18nModule, ru_RU} from "ng-zorro-antd/i18n";
import {NZ_ICONS, NzIconModule} from "ng-zorro-antd/icon";
import {NzImageModule} from "ng-zorro-antd/image";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzListModule} from "ng-zorro-antd/list";
import {NzMentionModule} from "ng-zorro-antd/mention";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzMessageModule} from "ng-zorro-antd/message";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzNoAnimationModule} from "ng-zorro-antd/core/no-animation";
import {NzNotificationModule} from "ng-zorro-antd/notification";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzRateModule} from "ng-zorro-antd/rate";
import {NzResultModule} from "ng-zorro-antd/result";
import {NzSegmentedModule} from "ng-zorro-antd/segmented";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzSliderModule} from "ng-zorro-antd/slider";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzStatisticModule} from "ng-zorro-antd/statistic";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import {NzTimelineModule} from "ng-zorro-antd/timeline";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzTransButtonModule} from "ng-zorro-antd/core/trans-button";
import {NzTransferModule} from "ng-zorro-antd/transfer";
import {NzTreeModule} from "ng-zorro-antd/tree";
import {NzTreeViewModule} from "ng-zorro-antd/tree-view";
import {NzTreeSelectModule} from "ng-zorro-antd/tree-select";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzResizableModule} from "ng-zorro-antd/resizable";
import {NzPipesModule} from "ng-zorro-antd/pipes";
// import {NzCodeEditorModule} from "ng-zorro-antd/code-editor";
// import {NzGraphModule} from "ng-zorro-antd/graph";
import {NzQRCodeModule} from "ng-zorro-antd/qr-code";
import {NzWaterMarkModule} from "ng-zorro-antd/water-mark";
import {NgForOf, NgIf, NgOptimizedImage, registerLocaleData} from '@angular/common';

import ru from '@angular/common/locales/ru';

import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {DragDropModule} from "@angular/cdk/drag-drop";
// import {GenericViewComponent} from './generics/generic-view/generic-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
// import {GenericEditViewComponent} from './generics/generic-edit-view/generic-edit-view.component';
// import {OrgStructureTreeDiagramComponent} from './org-structure-tree-diagram/org-structure-tree-diagram.component';
// import {GenericDictComponent} from "./generics/generic-dict/generic-dict.component";
// import {GenericDictEditComponent} from "./generics/generic-dict-edit/generic-dict-edit.component";
// import {GenericDictTreeComponent} from "./generics/generic-dict-tree/generic-dict-tree.component";
// import {GenericTransferComponent} from "./generics/generic-transfer/generic-transfer.component";
// import {GenericTreeDiagramComponent} from "./generics/generic-tree-diagram/generic-tree-diagram.component";


const antDesignIcons: { [p: string]: IconDefinition } = AllIcons as {
    [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map((key: string) => antDesignIcons[key])

registerLocaleData(ru);

@NgModule({
    declarations: [
        // GenericDictComponent,
        // GenericDictEditComponent,
        // GenericDictTreeComponent,
        // GenericEditViewComponent,
        // GenericTransferComponent,
        // GenericTreeDiagramComponent,
        // GenericViewComponent,
        //
        // OrgStructureTreeDiagramComponent,
    ],
    imports: [
        NgOptimizedImage,
        TranslateModule,
        ReactiveFormsModule,
        NgForOf,
        NgIf,
        DragDropModule,
        FormsModule,
        //
        NzAffixModule,
        NzAlertModule,
        NzAnchorModule,
        NzAutocompleteModule,
        NzAvatarModule,
        NzBackTopModule,
        NzBadgeModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzCalendarModule,
        NzCardModule,
        NzCarouselModule,
        NzCascaderModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzCommentModule,
        // NzCronExpressionModule,
        NzDatePickerModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzDrawerModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFormModule,
        NzGridModule,
        NzI18nModule,
        NzIconModule,
        NzImageModule,
        NzInputModule,
        NzInputNumberModule,
        NzLayoutModule,
        NzListModule,
        NzMentionModule,
        NzMenuModule,
        NzMessageModule,
        NzModalModule,
        NzNoAnimationModule,
        NzNotificationModule,
        NzPageHeaderModule,
        NzPaginationModule,
        NzPopconfirmModule,
        NzPopoverModule,
        NzProgressModule,
        NzRadioModule,
        NzRateModule,
        NzResultModule,
        NzSegmentedModule,
        NzSelectModule,
        NzSkeletonModule,
        NzSliderModule,
        NzSpaceModule,
        NzSpinModule,
        NzStatisticModule,
        NzStepsModule,
        NzSwitchModule,
        NzTableModule,
        NzTabsModule,
        NzTagModule,
        NzTimePickerModule,
        NzTimelineModule,
        NzToolTipModule,
        NzTransButtonModule,
        NzTransferModule,
        NzTreeModule,
        NzTreeViewModule,
        NzTreeSelectModule,
        NzTypographyModule,
        NzUploadModule,
        NzWaveModule,
        NzResizableModule,
        NzPipesModule,
        // NzCodeEditorModule,
        // NzGraphModule,
        NzQRCodeModule,
        NzWaterMarkModule,
        //////////////////////////////
        NgOptimizedImage,
    ],
    exports: [
        // GenericDictComponent,
        // GenericDictEditComponent,
        // GenericDictTreeComponent,
        // GenericEditViewComponent,
        // GenericTransferComponent,
        // GenericTreeDiagramComponent,
        // GenericViewComponent,
        //
        // OrgStructureTreeDiagramComponent,
        //
        DragDropModule,
        //
        NzAffixModule,
        NzAlertModule,
        NzAnchorModule,
        NzAutocompleteModule,
        NzAvatarModule,
        NzBackTopModule,
        NzBadgeModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzCalendarModule,
        NzCardModule,
        NzCarouselModule,
        NzCascaderModule,
        NzCheckboxModule,
        NzCollapseModule,
        NzCommentModule,
        // NzCronExpressionModule,
        NzDatePickerModule,
        NzDescriptionsModule,
        NzDividerModule,
        NzDrawerModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFormModule,
        NzGridModule,
        NzI18nModule,
        NzIconModule,
        NzImageModule,
        NzInputModule,
        NzInputNumberModule,
        NzLayoutModule,
        NzListModule,
        NzMentionModule,
        NzMenuModule,
        NzMessageModule,
        NzModalModule,
        NzNoAnimationModule,
        NzNotificationModule,
        NzPageHeaderModule,
        NzPaginationModule,
        NzPopconfirmModule,
        NzPopoverModule,
        NzProgressModule,
        NzRadioModule,
        NzRateModule,
        NzResultModule,
        NzSegmentedModule,
        NzSelectModule,
        NzSkeletonModule,
        NzSliderModule,
        NzSpaceModule,
        NzSpinModule,
        NzStatisticModule,
        NzStepsModule,
        NzSwitchModule,
        NzTableModule,
        NzTabsModule,
        NzTagModule,
        NzTimePickerModule,
        NzTimelineModule,
        NzToolTipModule,
        NzTransButtonModule,
        NzTransferModule,
        NzTreeModule,
        NzTreeViewModule,
        NzTreeSelectModule,
        NzTypographyModule,
        NzUploadModule,
        NzWaveModule,
        NzResizableModule,
        NzPipesModule,
        // NzCodeEditorModule,
        // NzGraphModule,
        NzQRCodeModule,
        NzWaterMarkModule,
        //////////////////////////////
        NgOptimizedImage,
    ],
    providers: [
        {provide: NZ_ICONS, useValue: icons},
        {provide: NZ_I18N, useValue: ru_RU}
    ]
})
export class SharedModule {
}
