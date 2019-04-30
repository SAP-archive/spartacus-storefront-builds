/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutModule, ConfigModule, I18nModule, UrlTranslationModule, } from '@spartacus/core';
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
                    UrlTranslationModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc3RlcC1jaGVja291dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L211bHRpLXN0ZXAtY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLGNBQWMsRUFFZCxZQUFZLEVBQ1osVUFBVSxFQUNWLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzNHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBd0JwRSxNQUFNLE9BQU8sdUJBQXVCOzs7WUF0Qm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLG9CQUFvQjtvQkFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLDBCQUEwQixFQUFFLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFO3lCQUNuRTtxQkFDRixFQUFBLENBQUM7b0JBQ0YsY0FBYztvQkFDZCxVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUMxQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jaGVja291dC9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBNdWx0aVN0ZXBDaGVja291dENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyL211bHRpLXN0ZXAtY2hlY2tvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZU1vZHVsZSB9IGZyb20gJy4vZGVsaXZlcnktbW9kZS9kZWxpdmVyeS1tb2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kTW9kdWxlIH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5tb2R1bGUnO1xuaW1wb3J0IHsgUmV2aWV3U3VibWl0TW9kdWxlIH0gZnJvbSAnLi9yZXZpZXctc3VibWl0L3Jldmlldy1zdWJtaXQubW9kdWxlJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc01vZHVsZSB9IGZyb20gJy4vc2hpcHBpbmctYWRkcmVzcy9zaGlwcGluZy1hZGRyZXNzLm1vZHVsZSc7XG5pbXBvcnQgeyBQbGFjZU9yZGVyTW9kdWxlIH0gZnJvbSAnLi9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgU2hpcHBpbmdBZGRyZXNzTW9kdWxlLFxuICAgIERlbGl2ZXJ5TW9kZU1vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kTW9kdWxlLFxuICAgIFJldmlld1N1Ym1pdE1vZHVsZSxcbiAgICBQbGFjZU9yZGVyTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgTXVsdGlTdGVwQ2hlY2tvdXRDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1tdWx0aS1zdGVwLWNoZWNrb3V0JyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDaGVja291dE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNdWx0aVN0ZXBDaGVja291dENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW011bHRpU3RlcENoZWNrb3V0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlTdGVwQ2hlY2tvdXRNb2R1bGUge31cbiJdfQ==