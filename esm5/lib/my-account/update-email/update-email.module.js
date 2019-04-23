/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '../../ui/components/spinner/spinner.module';
import { UpdateEmailFormComponent } from './update-email-form/update-email-form.component';
import { UpdateEmailComponent } from './update-email.component';
var UpdateEmailModule = /** @class */ (function () {
    function UpdateEmailModule() {
    }
    UpdateEmailModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                UpdateEmailComponent: {
                                    selector: 'cx-update-email',
                                },
                            },
                        }))),
                        FormsModule,
                        ReactiveFormsModule,
                        SpinnerModule,
                        I18nModule,
                    ],
                    declarations: [UpdateEmailFormComponent, UpdateEmailComponent],
                    exports: [UpdateEmailComponent],
                    entryComponents: [UpdateEmailComponent],
                },] }
    ];
    return UpdateEmailModule;
}());
export { UpdateEmailModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9teS1hY2NvdW50L3VwZGF0ZS1lbWFpbC91cGRhdGUtZW1haWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFhLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEU7SUFBQTtJQW1CZ0MsQ0FBQzs7Z0JBbkJoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLG9CQUFvQixFQUFFO29DQUNwQixRQUFRLEVBQUUsaUJBQWlCO2lDQUM1Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7d0JBQ0YsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxvQkFBb0IsQ0FBQztvQkFDOUQsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUN4Qzs7SUFDK0Isd0JBQUM7Q0FBQSxBQW5CakMsSUFtQmlDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi91aS9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgVXBkYXRlRW1haWxGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi91cGRhdGUtZW1haWwtZm9ybS91cGRhdGUtZW1haWwtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBkYXRlRW1haWxDb21wb25lbnQgfSBmcm9tICcuL3VwZGF0ZS1lbWFpbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBVcGRhdGVFbWFpbENvbXBvbmVudDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtdXBkYXRlLWVtYWlsJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1VwZGF0ZUVtYWlsRm9ybUNvbXBvbmVudCwgVXBkYXRlRW1haWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVXBkYXRlRW1haWxDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtVcGRhdGVFbWFpbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsTW9kdWxlIHt9XG4iXX0=