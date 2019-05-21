/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from '@spartacus/core';
import { CardModule } from '../../../../../shared/components/card/card.module';
import { PaymentFormComponent } from './payment-form.component';
import { BillingAddressFormModule } from '../billing-address-form/billing-address-form.module';
import { IconModule } from '../../../../../cms-components/misc/icon/icon.module';
export class PaymentFormModule {
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
                ],
                declarations: [PaymentFormComponent],
                entryComponents: [PaymentFormComponent],
                exports: [PaymentFormComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1mb3JtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtZm9ybS9wYXltZW50LWZvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFnQmpGLE1BQU0sT0FBTyxpQkFBaUI7OztZQWQ3QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLFVBQVU7b0JBQ1Ysd0JBQXdCO29CQUN4QixVQUFVO29CQUNWLFVBQVU7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuXG5pbXBvcnQgeyBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEJpbGxpbmdBZGRyZXNzRm9ybU1vZHVsZSB9IGZyb20gJy4uL2JpbGxpbmctYWRkcmVzcy1mb3JtL2JpbGxpbmctYWRkcmVzcy1mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nU2VsZWN0TW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQmlsbGluZ0FkZHJlc3NGb3JtTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGF5bWVudEZvcm1Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQYXltZW50Rm9ybUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQYXltZW50Rm9ybUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRGb3JtTW9kdWxlIHt9XG4iXX0=