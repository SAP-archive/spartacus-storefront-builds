import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
var CheckoutComponentModule = /** @class */ (function () {
    function CheckoutComponentModule() {
    }
    CheckoutComponentModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
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
        })
    ], CheckoutComponentModule);
    return CheckoutComponentModule;
}());
export { CheckoutComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUMvRywyQkFBMkI7QUFDM0IsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sdUdBQXVHLENBQUM7QUFDM0osMkJBQTJCO0FBQzNCLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlHQUFpRyxDQUFDO0FBQ2xKLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBa0I5RjtJQUFBO0lBQXNDLENBQUM7SUFBMUIsdUJBQXVCO1FBaEJuQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWiwwQkFBMEI7Z0JBQzFCLDBCQUEwQjtnQkFDMUIsc0JBQXNCO2dCQUN0QiwrQkFBK0I7Z0JBQy9CLGtDQUFrQztnQkFDbEMsa0JBQWtCO2dCQUNsQixtQkFBbUI7Z0JBQ25CLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLHFCQUFxQjthQUN0QjtTQUNGLENBQUM7T0FDVyx1QkFBdUIsQ0FBRztJQUFELDhCQUFDO0NBQUEsQUFBdkMsSUFBdUM7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1vcmNoZXN0cmF0b3IvY2hlY2tvdXQtb3JjaGVzdHJhdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dE9yZGVyU3VtbWFyeU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1vcmRlci1zdW1tYXJ5L2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkubW9kdWxlJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20ubW9kdWxlJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MubW9kdWxlJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9kZWxpdmVyeS1tb2RlL2RlbGl2ZXJ5LW1vZGUubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QubW9kdWxlJztcbmltcG9ydCB7IFBsYWNlT3JkZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIubW9kdWxlJztcbmltcG9ydCB7IFByb21vdGlvbnNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXZpZXdTdWJtaXRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcmV2aWV3LXN1Ym1pdC9yZXZpZXctc3VibWl0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2hpcHBpbmctYWRkcmVzcy9zaGlwcGluZy1hZGRyZXNzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2hlY2tvdXRPcmNoZXN0cmF0b3JNb2R1bGUsXG4gICAgQ2hlY2tvdXRPcmRlclN1bW1hcnlNb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9iaWxlVG9wTW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Nb2R1bGUsXG4gICAgRGVsaXZlcnlNb2RlTW9kdWxlLFxuICAgIFBheW1lbnRNZXRob2RNb2R1bGUsXG4gICAgUGxhY2VPcmRlck1vZHVsZSxcbiAgICBQcm9tb3Rpb25zTW9kdWxlLFxuICAgIFJldmlld1N1Ym1pdE1vZHVsZSxcbiAgICBTaGlwcGluZ0FkZHJlc3NNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIHt9XG4iXX0=