/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutModule } from '@spartacus/core';
import { CartComponentModule } from '../../cms-components/checkout/cart/cart.module';
import { CheckoutOrchestratorModule } from './components/checkout-orchestrator/checkout-orchestrator.module';
import { CheckoutOrderSummaryModule } from './components/checkout-order-summary/checkout-order-summary.module';
import { CheckoutProgressModule } from './components/checkout-progress/checkout-progress.module';
// tslint:disable-next-line
import { CheckoutProgressMobileTopModule } from './components/checkout-progress/checkout-progress-mobile-top/checkout-progress-mobile-top.module';
// tslint:disable-next-line
import { CheckoutProgressMobileBottomModule } from './components/checkout-progress/checkout-progress-mobile-bottom/checkout-progress-mobile-bottom.module';
import { DeliveryModeModule } from './components/delivery-mode/delivery-mode.module';
import { OrderConfirmationModule } from './components/order-confirmation/order-confirmation.module';
import { PaymentMethodModule } from './components/payment-method/payment-method.module';
import { PlaceOrderModule } from './components/place-order/place-order.module';
import { PromotionsModule } from './components/promotions/promotions.module';
import { ReviewSubmitModule } from './components/review-submit/review-submit.module';
import { ShippingAddressModule } from './components/shipping-address/shipping-address.module';
import { CheckoutConfigService } from './checkout-config.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOztBQUVqRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxpR0FBaUcsQ0FBQzs7QUFFbEosT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sdUdBQXVHLENBQUM7QUFDM0osT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDcEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDeEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDOUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7SUFBQTtJQXFCc0MsQ0FBQzs7Z0JBckJ0QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLDBCQUEwQjt3QkFDMUIsMEJBQTBCO3dCQUMxQixzQkFBc0I7d0JBQ3RCLCtCQUErQjt3QkFDL0Isa0NBQWtDO3dCQUNsQyxrQkFBa0I7d0JBQ2xCLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixxQkFBcUI7cUJBQ3RCOztvQkFFRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDbkM7O0lBQ3FDLDhCQUFDO0NBQUEsQUFyQnZDLElBcUJ1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hlY2tvdXRNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmNoZXN0cmF0b3JNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtb3JjaGVzdHJhdG9yL2NoZWNrb3V0LW9yY2hlc3RyYXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRPcmRlclN1bW1hcnlNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtb3JkZXItc3VtbWFyeS9jaGVja291dC1vcmRlci1zdW1tYXJ5Lm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLm1vZHVsZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wLm1vZHVsZSc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLm1vZHVsZSc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGVNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZGVsaXZlcnktbW9kZS9kZWxpdmVyeS1tb2RlLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vb3JkZXItY29uZmlybWF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLm1vZHVsZSc7XG5pbXBvcnQgeyBQbGFjZU9yZGVyTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BsYWNlLW9yZGVyL3BsYWNlLW9yZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgUmV2aWV3U3VibWl0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2hpcHBpbmdBZGRyZXNzTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FydENvbXBvbmVudE1vZHVsZSxcbiAgICBDaGVja291dE1vZHVsZSxcbiAgICBDaGVja291dE9yY2hlc3RyYXRvck1vZHVsZSxcbiAgICBDaGVja291dE9yZGVyU3VtbWFyeU1vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSxcbiAgICBEZWxpdmVyeU1vZGVNb2R1bGUsXG4gICAgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZE1vZHVsZSxcbiAgICBQbGFjZU9yZGVyTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgUmV2aWV3U3VibWl0TW9kdWxlLFxuICAgIFNoaXBwaW5nQWRkcmVzc01vZHVsZSxcbiAgXSxcbiAgLy8gQHRvZG86IHNob3VsZCB3ZSBrZWVwIGJlbG93IHByb3ZpZGVyIGhlcmU/XG4gIHByb3ZpZGVyczogW0NoZWNrb3V0Q29uZmlnU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIHt9XG4iXX0=