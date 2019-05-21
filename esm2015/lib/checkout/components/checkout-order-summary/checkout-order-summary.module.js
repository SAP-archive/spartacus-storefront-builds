/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/checkout/cart/cart-shared/cart-shared.module';
import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';
export class CheckoutOrderSummaryModule {
}
CheckoutOrderSummaryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CartSharedModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutOrderSummary: {
                                selector: 'cx-checkout-order-summary',
                            },
                        },
                    }))),
                ],
                declarations: [CheckoutOrderSummaryComponent],
                entryComponents: [CheckoutOrderSummaryComponent],
                exports: [CheckoutOrderSummaryComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1vcmRlci1zdW1tYXJ5L2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDM0csT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFrQm5GLE1BQU0sT0FBTywwQkFBMEI7OztZQWhCdEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLG9CQUFvQixFQUFFO2dDQUNwQixRQUFRLEVBQUUsMkJBQTJCOzZCQUN0Qzt5QkFDRjtxQkFDRixFQUFBLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzdDLGVBQWUsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUNoRCxPQUFPLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIENtc0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmRlclN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dE9yZGVyU3VtbWFyeToge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtY2hlY2tvdXQtb3JkZXItc3VtbWFyeScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDaGVja291dE9yZGVyU3VtbWFyeUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NoZWNrb3V0T3JkZXJTdW1tYXJ5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NoZWNrb3V0T3JkZXJTdW1tYXJ5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRPcmRlclN1bW1hcnlNb2R1bGUge31cbiJdfQ==