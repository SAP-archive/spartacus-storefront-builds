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
import { ScheduleReplenishmentOrderModule } from './components/schedule-replenishment-order/schedule-replenishment-order.module';
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
                    ScheduleReplenishmentOrderModule,
                    PromotionsModule,
                    ReviewSubmitModule,
                    ShippingAddressModule,
                    CostCenterModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQy9HLDJCQUEyQjtBQUMzQixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx1R0FBdUcsQ0FBQztBQUMzSiwyQkFBMkI7QUFDM0IsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUdBQWlHLENBQUM7QUFDbEosT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDakcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDakksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFxQjlGLE1BQU0sT0FBTyx1QkFBdUI7OztZQW5CbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQixzQkFBc0I7b0JBQ3RCLCtCQUErQjtvQkFDL0Isa0NBQWtDO29CQUNsQyxpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLGdDQUFnQztvQkFDaEMsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtvQkFDckIsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1vcmNoZXN0cmF0b3IvY2hlY2tvdXQtb3JjaGVzdHJhdG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dE9yZGVyU3VtbWFyeU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1vcmRlci1zdW1tYXJ5L2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkubW9kdWxlJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20ubW9kdWxlJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MubW9kdWxlJztcbmltcG9ydCB7IENvc3RDZW50ZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY29zdC1jZW50ZXIvY29zdC1jZW50ZXIubW9kdWxlJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9kZWxpdmVyeS1tb2RlL2RlbGl2ZXJ5LW1vZGUubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRUeXBlTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BheW1lbnQtdHlwZS9wYXltZW50LXR5cGUubW9kdWxlJztcbmltcG9ydCB7IFBsYWNlT3JkZXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIubW9kdWxlJztcbmltcG9ydCB7IFByb21vdGlvbnNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXZpZXdTdWJtaXRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcmV2aWV3LXN1Ym1pdC9yZXZpZXctc3VibWl0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZVJlcGxlbmlzaG1lbnRPcmRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zY2hlZHVsZS1yZXBsZW5pc2htZW50LW9yZGVyL3NjaGVkdWxlLXJlcGxlbmlzaG1lbnQtb3JkZXIubW9kdWxlJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSxcbiAgICBDaGVja291dE9yZGVyU3VtbWFyeU1vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSxcbiAgICBQYXltZW50VHlwZU1vZHVsZSxcbiAgICBEZWxpdmVyeU1vZGVNb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZE1vZHVsZSxcbiAgICBQbGFjZU9yZGVyTW9kdWxlLFxuICAgIFNjaGVkdWxlUmVwbGVuaXNobWVudE9yZGVyTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgUmV2aWV3U3VibWl0TW9kdWxlLFxuICAgIFNoaXBwaW5nQWRkcmVzc01vZHVsZSxcbiAgICBDb3N0Q2VudGVyTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvbXBvbmVudE1vZHVsZSB7fVxuIl19