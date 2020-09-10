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
import { CostCenterModule } from './components/cost-center/cost-center.module';
import { DeliveryModeModule } from './components/delivery-mode/delivery-mode.module';
import { PaymentMethodModule } from './components/payment-method/payment-method.module';
import { PaymentTypeModule } from './components/payment-type/payment-type.module';
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
                PaymentTypeModule,
                DeliveryModeModule,
                PaymentMethodModule,
                PlaceOrderModule,
                PromotionsModule,
                ReviewSubmitModule,
                ShippingAddressModule,
                CostCenterModule,
            ],
        })
    ], CheckoutComponentModule);
    return CheckoutComponentModule;
}());
export { CheckoutComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUMvRywyQkFBMkI7QUFDM0IsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sdUdBQXVHLENBQUM7QUFDM0osMkJBQTJCO0FBQzNCLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlHQUFpRyxDQUFDO0FBQ2xKLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBb0I5RjtJQUFBO0lBQXNDLENBQUM7SUFBMUIsdUJBQXVCO1FBbEJuQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWiwwQkFBMEI7Z0JBQzFCLDBCQUEwQjtnQkFDMUIsc0JBQXNCO2dCQUN0QiwrQkFBK0I7Z0JBQy9CLGtDQUFrQztnQkFDbEMsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsZ0JBQWdCO2dCQUNoQixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjtnQkFDbEIscUJBQXFCO2dCQUNyQixnQkFBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csdUJBQXVCLENBQUc7SUFBRCw4QkFBQztDQUFBLEFBQXZDLElBQXVDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmNoZXN0cmF0b3JNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtb3JjaGVzdHJhdG9yL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmRlclN1bW1hcnlNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtb3JkZXItc3VtbWFyeS9jaGVja291dC1vcmRlci1zdW1tYXJ5Lm1vZHVsZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLm1vZHVsZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLm1vZHVsZSc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2Nvc3QtY2VudGVyL2Nvc3QtY2VudGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGVNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZGVsaXZlcnktbW9kZS9kZWxpdmVyeS1tb2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50VHlwZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wYXltZW50LXR5cGUvcGF5bWVudC10eXBlLm1vZHVsZSc7XG5pbXBvcnQgeyBQbGFjZU9yZGVyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BsYWNlLW9yZGVyL3BsYWNlLW9yZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgUmV2aWV3U3VibWl0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2hpcHBpbmdBZGRyZXNzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENoZWNrb3V0T3JjaGVzdHJhdG9yTW9kdWxlLFxuICAgIENoZWNrb3V0T3JkZXJTdW1tYXJ5TW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tTW9kdWxlLFxuICAgIFBheW1lbnRUeXBlTW9kdWxlLFxuICAgIERlbGl2ZXJ5TW9kZU1vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kTW9kdWxlLFxuICAgIFBsYWNlT3JkZXJNb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBSZXZpZXdTdWJtaXRNb2R1bGUsXG4gICAgU2hpcHBpbmdBZGRyZXNzTW9kdWxlLFxuICAgIENvc3RDZW50ZXJNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIHt9XG4iXX0=