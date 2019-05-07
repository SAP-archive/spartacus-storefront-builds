/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutModule, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/checkout/cart/cart-shared/cart-shared.module';
import { MultiStepCheckoutComponent } from './container/multi-step-checkout.component';
import { DeliveryModeModule } from './delivery-mode/delivery-mode.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { ReviewSubmitModule } from './review-submit/review-submit.module';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';
import { PlaceOrderModule } from './place-order/place-order.module';
export class MultiStepCheckoutModule {
}
MultiStepCheckoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CartSharedModule,
                    ShippingAddressModule,
                    DeliveryModeModule,
                    PaymentMethodModule,
                    ReviewSubmitModule,
                    PlaceOrderModule,
                    RouterModule,
                    UrlModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            MultiStepCheckoutComponent: { selector: 'cx-multi-step-checkout' },
                        },
                    }))),
                    CheckoutModule,
                    I18nModule,
                ],
                declarations: [MultiStepCheckoutComponent],
                entryComponents: [MultiStepCheckoutComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc3RlcC1jaGVja291dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L211bHRpLXN0ZXAtY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLGNBQWMsRUFFZCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzNHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBd0JwRSxNQUFNLE9BQU8sdUJBQXVCOzs7WUF0Qm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLDBCQUEwQixFQUFFLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFO3lCQUNuRTtxQkFDRixFQUFBLENBQUM7b0JBQ0YsY0FBYztvQkFDZCxVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUMxQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlTdGVwQ2hlY2tvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9tdWx0aS1zdGVwLWNoZWNrb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGVNb2R1bGUgfSBmcm9tICcuL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5tb2R1bGUnO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZE1vZHVsZSB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QubW9kdWxlJztcbmltcG9ydCB7IFJldmlld1N1Ym1pdE1vZHVsZSB9IGZyb20gJy4vcmV2aWV3LXN1Ym1pdC9yZXZpZXctc3VibWl0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NNb2R1bGUgfSBmcm9tICcuL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUnO1xuaW1wb3J0IHsgUGxhY2VPcmRlck1vZHVsZSB9IGZyb20gJy4vcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIFNoaXBwaW5nQWRkcmVzc01vZHVsZSxcbiAgICBEZWxpdmVyeU1vZGVNb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZE1vZHVsZSxcbiAgICBSZXZpZXdTdWJtaXRNb2R1bGUsXG4gICAgUGxhY2VPcmRlck1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBNdWx0aVN0ZXBDaGVja291dENvbXBvbmVudDogeyBzZWxlY3RvcjogJ2N4LW11bHRpLXN0ZXAtY2hlY2tvdXQnIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIENoZWNrb3V0TW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW011bHRpU3RlcENoZWNrb3V0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTXVsdGlTdGVwQ2hlY2tvdXRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVN0ZXBDaGVja291dE1vZHVsZSB7fVxuIl19