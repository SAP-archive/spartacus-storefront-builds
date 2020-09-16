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
export class CheckoutComponentModule {
}
CheckoutComponentModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQy9HLDJCQUEyQjtBQUMzQixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx1R0FBdUcsQ0FBQztBQUMzSiwyQkFBMkI7QUFDM0IsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUdBQWlHLENBQUM7QUFDbEosT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDakcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFvQjlGLE1BQU0sT0FBTyx1QkFBdUI7OztZQWxCbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLCtCQUErQjtvQkFDL0Isa0NBQWtDO29CQUNsQyxpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLGdCQUFnQjtpQkFDakI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmNoZXN0cmF0b3JNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtb3JjaGVzdHJhdG9yL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmRlclN1bW1hcnlNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtb3JkZXItc3VtbWFyeS9jaGVja291dC1vcmRlci1zdW1tYXJ5Lm1vZHVsZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLm1vZHVsZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLm1vZHVsZSc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2Nvc3QtY2VudGVyL2Nvc3QtY2VudGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGVNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZGVsaXZlcnktbW9kZS9kZWxpdmVyeS1tb2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50VHlwZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wYXltZW50LXR5cGUvcGF5bWVudC10eXBlLm1vZHVsZSc7XG5pbXBvcnQgeyBQbGFjZU9yZGVyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BsYWNlLW9yZGVyL3BsYWNlLW9yZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgUmV2aWV3U3VibWl0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2hpcHBpbmdBZGRyZXNzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENoZWNrb3V0T3JjaGVzdHJhdG9yTW9kdWxlLFxuICAgIENoZWNrb3V0T3JkZXJTdW1tYXJ5TW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tTW9kdWxlLFxuICAgIFBheW1lbnRUeXBlTW9kdWxlLFxuICAgIERlbGl2ZXJ5TW9kZU1vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kTW9kdWxlLFxuICAgIFBsYWNlT3JkZXJNb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBSZXZpZXdTdWJtaXRNb2R1bGUsXG4gICAgU2hpcHBpbmdBZGRyZXNzTW9kdWxlLFxuICAgIENvc3RDZW50ZXJNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIHt9XG4iXX0=