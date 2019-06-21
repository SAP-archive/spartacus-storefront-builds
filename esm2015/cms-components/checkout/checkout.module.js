/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutModule } from '@spartacus/core';
import { CartComponentModule } from '../cart/cart.module';
import { CheckoutConfigService } from './checkout-config.service';
import { CheckoutOrchestratorModule } from './components/checkout-orchestrator/checkout-orchestrator.module';
import { CheckoutOrderSummaryModule } from './components/checkout-order-summary/checkout-order-summary.module';
// tslint:disable-next-line
import { CheckoutProgressMobileBottomModule } from './components/checkout-progress/checkout-progress-mobile-bottom/checkout-progress-mobile-bottom.module';
// tslint:disable-next-line
import { CheckoutProgressMobileTopModule } from './components/checkout-progress/checkout-progress-mobile-top/checkout-progress-mobile-top.module';
import { CheckoutProgressModule } from './components/checkout-progress/checkout-progress.module';
import { DeliveryModeModule } from './components/delivery-mode/delivery-mode.module';
import { PaymentMethodModule } from './components/payment-method/payment-method.module';
import { PlaceOrderModule } from './components/place-order/place-order.module';
import { PromotionsModule } from './components/promotions/promotions.module';
import { ReviewSubmitModule } from './components/review-submit/review-submit.module';
import { ShippingAddressModule } from './components/shipping-address/shipping-address.module';
export class CheckoutComponentModule {
}
CheckoutComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CartComponentModule,
                    CheckoutModule,
                    CheckoutOrchestratorModule,
                    CheckoutOrderSummaryModule,
                    CheckoutProgressModule,
                    CheckoutProgressMobileTopModule,
                    CheckoutProgressMobileBottomModule,
                    DeliveryModeModule,
                    PaymentMethodModule,
                    PlaceOrderModule,
                    PromotionsModule,
                    ReviewSubmitModule,
                    ShippingAddressModule,
                ],
                // @todo: should we keep below provider here?
                providers: [CheckoutConfigService],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDN0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7O0FBRS9HLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHVHQUF1RyxDQUFDOztBQUUzSixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpR0FBaUcsQ0FBQztBQUNsSixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQXNCOUYsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBcEJuQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLCtCQUErQjtvQkFDL0Isa0NBQWtDO29CQUNsQyxrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIscUJBQXFCO2lCQUN0Qjs7Z0JBRUQsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0TW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcnRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4vY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmNoZXN0cmF0b3JNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtb3JjaGVzdHJhdG9yL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmRlclN1bW1hcnlNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtb3JkZXItc3VtbWFyeS9jaGVja291dC1vcmRlci1zdW1tYXJ5Lm1vZHVsZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLm1vZHVsZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLm1vZHVsZSc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGVNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZGVsaXZlcnktbW9kZS9kZWxpdmVyeS1tb2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLm1vZHVsZSc7XG5pbXBvcnQgeyBQbGFjZU9yZGVyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BsYWNlLW9yZGVyL3BsYWNlLW9yZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgUmV2aWV3U3VibWl0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2hpcHBpbmdBZGRyZXNzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgQ2hlY2tvdXRNb2R1bGUsXG4gICAgQ2hlY2tvdXRPcmNoZXN0cmF0b3JNb2R1bGUsXG4gICAgQ2hlY2tvdXRPcmRlclN1bW1hcnlNb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9iaWxlVG9wTW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Nb2R1bGUsXG4gICAgRGVsaXZlcnlNb2RlTW9kdWxlLFxuICAgIFBheW1lbnRNZXRob2RNb2R1bGUsXG4gICAgUGxhY2VPcmRlck1vZHVsZSxcbiAgICBQcm9tb3Rpb25zTW9kdWxlLFxuICAgIFJldmlld1N1Ym1pdE1vZHVsZSxcbiAgICBTaGlwcGluZ0FkZHJlc3NNb2R1bGUsXG4gIF0sXG4gIC8vIEB0b2RvOiBzaG91bGQgd2Uga2VlcCBiZWxvdyBwcm92aWRlciBoZXJlP1xuICBwcm92aWRlcnM6IFtDaGVja291dENvbmZpZ1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvbXBvbmVudE1vZHVsZSB7fVxuIl19