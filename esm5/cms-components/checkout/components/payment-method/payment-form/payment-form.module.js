/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from '@spartacus/core';
import { OnlyNumberDirectiveModule } from 'projects/storefrontlib/src/shared/directives/only-number/only-number.directive.module';
import { CardModule } from '../../../../../shared/components/card/card.module';
import { IconModule } from '../../../../misc/icon/icon.module';
import { BillingAddressFormModule } from '../billing-address-form/billing-address-form.module';
import { PaymentFormComponent } from './payment-form.component';
var PaymentFormModule = /** @class */ (function () {
    function PaymentFormModule() {
    }
    PaymentFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NgSelectModule,
                        CardModule,
                        BillingAddressFormModule,
                        I18nModule,
                        IconModule,
                        OnlyNumberDirectiveModule,
                    ],
                    declarations: [PaymentFormComponent],
                    entryComponents: [PaymentFormComponent],
                    exports: [PaymentFormComponent],
                },] }
    ];
    return PaymentFormModule;
}());
export { PaymentFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDbEksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRTtJQUFBO0lBZWdDLENBQUM7O2dCQWZoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLFVBQVU7d0JBQ1Ysd0JBQXdCO3dCQUN4QixVQUFVO3dCQUNWLFVBQVU7d0JBQ1YseUJBQXlCO3FCQUMxQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsZUFBZSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQzs7SUFDK0Isd0JBQUM7Q0FBQSxBQWZqQyxJQWVpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT25seU51bWJlckRpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJ3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9kaXJlY3RpdmVzL29ubHktbnVtYmVyL29ubHktbnVtYmVyLmRpcmVjdGl2ZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBCaWxsaW5nQWRkcmVzc0Zvcm1Nb2R1bGUgfSBmcm9tICcuLi9iaWxsaW5nLWFkZHJlc3MtZm9ybS9iaWxsaW5nLWFkZHJlc3MtZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgUGF5bWVudEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZm9ybS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmdTZWxlY3RNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBCaWxsaW5nQWRkcmVzc0Zvcm1Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIE9ubHlOdW1iZXJEaXJlY3RpdmVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BheW1lbnRGb3JtQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGF5bWVudEZvcm1Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUGF5bWVudEZvcm1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50Rm9ybU1vZHVsZSB7fVxuIl19