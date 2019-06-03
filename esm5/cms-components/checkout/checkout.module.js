/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
import { OrderConfirmationModule } from './components/order-confirmation/order-confirmation.module';
import { PaymentMethodModule } from './components/payment-method/payment-method.module';
import { PlaceOrderModule } from './components/place-order/place-order.module';
import { PromotionsModule } from './components/promotions/promotions.module';
import { ReviewSubmitModule } from './components/review-submit/review-submit.module';
import { ShippingAddressModule } from './components/shipping-address/shipping-address.module';
var CheckoutComponentModule = /** @class */ (function () {
    function CheckoutComponentModule() {
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
                        OrderConfirmationModule,
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
    return CheckoutComponentModule;
}());
export { CheckoutComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDN0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7O0FBRS9HLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHVHQUF1RyxDQUFDOztBQUUzSixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpR0FBaUcsQ0FBQztBQUNsSixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUU5RjtJQUFBO0lBcUJzQyxDQUFDOztnQkFyQnRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsMEJBQTBCO3dCQUMxQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsK0JBQStCO3dCQUMvQixrQ0FBa0M7d0JBQ2xDLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLHFCQUFxQjtxQkFDdEI7O29CQUVELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNuQzs7SUFDcUMsOEJBQUM7Q0FBQSxBQXJCdkMsSUFxQnVDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uL2NhcnQvY2FydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1vcmNoZXN0cmF0b3IvY2hlY2tvdXQtb3JjaGVzdHJhdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dE9yZGVyU3VtbWFyeU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1vcmRlci1zdW1tYXJ5L2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkubW9kdWxlJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20ubW9kdWxlJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MubW9kdWxlJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9kZWxpdmVyeS1tb2RlL2RlbGl2ZXJ5LW1vZGUubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QubW9kdWxlJztcbmltcG9ydCB7IFBsYWNlT3JkZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIubW9kdWxlJztcbmltcG9ydCB7IFByb21vdGlvbnNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXZpZXdTdWJtaXRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcmV2aWV3LXN1Ym1pdC9yZXZpZXctc3VibWl0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hpcHBpbmctYWRkcmVzcy9zaGlwcGluZy1hZGRyZXNzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FydENvbXBvbmVudE1vZHVsZSxcbiAgICBDaGVja291dE1vZHVsZSxcbiAgICBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSxcbiAgICBDaGVja291dE9yZGVyU3VtbWFyeU1vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSxcbiAgICBEZWxpdmVyeU1vZGVNb2R1bGUsXG4gICAgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZE1vZHVsZSxcbiAgICBQbGFjZU9yZGVyTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgUmV2aWV3U3VibWl0TW9kdWxlLFxuICAgIFNoaXBwaW5nQWRkcmVzc01vZHVsZSxcbiAgXSxcbiAgLy8gQHRvZG86IHNob3VsZCB3ZSBrZWVwIGJlbG93IHByb3ZpZGVyIGhlcmU/XG4gIHByb3ZpZGVyczogW0NoZWNrb3V0Q29uZmlnU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIHt9XG4iXX0=