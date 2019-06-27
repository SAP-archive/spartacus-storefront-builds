/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQzs7QUFFL0csT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sdUdBQXVHLENBQUM7O0FBRTNKLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlHQUFpRyxDQUFDO0FBQ2xKLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBb0I5RixNQUFNLE9BQU8sdUJBQXVCOzs7WUFsQm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWiwwQkFBMEI7b0JBQzFCLDBCQUEwQjtvQkFDMUIsc0JBQXNCO29CQUN0QiwrQkFBK0I7b0JBQy9CLGtDQUFrQztvQkFDbEMsa0JBQWtCO29CQUNsQixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtpQkFDdEI7O2dCQUVELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2FBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0T3JjaGVzdHJhdG9yTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrb3V0LW9yY2hlc3RyYXRvci9jaGVja291dC1vcmNoZXN0cmF0b3IubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0T3JkZXJTdW1tYXJ5TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrb3V0LW9yZGVyLXN1bW1hcnkvY2hlY2tvdXQtb3JkZXItc3VtbWFyeS5tb2R1bGUnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5tb2R1bGUnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9iaWxlVG9wTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy5tb2R1bGUnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5tb2R1bGUnO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5tb2R1bGUnO1xuaW1wb3J0IHsgUGxhY2VPcmRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9tb3Rpb25zL3Byb21vdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IFJldmlld1N1Ym1pdE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9yZXZpZXctc3VibWl0L3Jldmlldy1zdWJtaXQubW9kdWxlJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSxcbiAgICBDaGVja291dE9yZGVyU3VtbWFyeU1vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSxcbiAgICBEZWxpdmVyeU1vZGVNb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZE1vZHVsZSxcbiAgICBQbGFjZU9yZGVyTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgUmV2aWV3U3VibWl0TW9kdWxlLFxuICAgIFNoaXBwaW5nQWRkcmVzc01vZHVsZSxcbiAgXSxcbiAgLy8gQHRvZG86IHNob3VsZCB3ZSBrZWVwIGJlbG93IHByb3ZpZGVyIGhlcmU/XG4gIHByb3ZpZGVyczogW0NoZWNrb3V0Q29uZmlnU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIHt9XG4iXX0=