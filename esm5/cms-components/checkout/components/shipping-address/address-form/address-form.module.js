/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from '@spartacus/core';
import { AutoFocusDirectiveModule } from '../../../../../shared/directives/auto-focus/auto-focus.directive.module';
import { IconModule } from '../../../../misc/icon/index';
import { AddressFormComponent } from './address-form.component';
import { SuggestedAddressDialogComponent } from './suggested-addresses-dialog/suggested-addresses-dialog.component';
var AddressFormModule = /** @class */ (function () {
    function AddressFormModule() {
    }
    AddressFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        FormsModule,
                        RouterModule,
                        NgSelectModule,
                        IconModule,
                        I18nModule,
                        AutoFocusDirectiveModule,
                    ],
                    declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
                    entryComponents: [SuggestedAddressDialogComponent],
                    exports: [AddressFormComponent, SuggestedAddressDialogComponent],
                },] }
    ];
    return AddressFormModule;
}());
export { AddressFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUVwSDtJQUFBO0lBZWdDLENBQUM7O2dCQWZoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxVQUFVO3dCQUNWLFVBQVU7d0JBQ1Ysd0JBQXdCO3FCQUN6QjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwrQkFBK0IsQ0FBQztvQkFDckUsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQ2xELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLCtCQUErQixDQUFDO2lCQUNqRTs7SUFDK0Isd0JBQUM7Q0FBQSxBQWZqQyxJQWVpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBdXRvRm9jdXNEaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9hdXRvLWZvY3VzL2F1dG8tZm9jdXMuZGlyZWN0aXZlLm1vZHVsZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3NGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRyZXNzLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTmdTZWxlY3RNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEF1dG9Gb2N1c0RpcmVjdGl2ZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWRkcmVzc0Zvcm1Db21wb25lbnQsIFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTdWdnZXN0ZWRBZGRyZXNzRGlhbG9nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FkZHJlc3NGb3JtQ29tcG9uZW50LCBTdWdnZXN0ZWRBZGRyZXNzRGlhbG9nQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc0Zvcm1Nb2R1bGUge31cbiJdfQ==