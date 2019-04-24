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
var MultiStepCheckoutModule = /** @class */ (function () {
    function MultiStepCheckoutModule() {
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
    return MultiStepCheckoutModule;
}());
export { MultiStepCheckoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc3RlcC1jaGVja291dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L211bHRpLXN0ZXAtY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGNBQWMsRUFFZCxZQUFZLEVBQ1osVUFBVSxFQUNWLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzNHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRW5GO0lBQUE7SUFxQnNDLENBQUM7O2dCQXJCdEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLDBCQUEwQixFQUFFLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFOzZCQUNuRTt5QkFDRixFQUFBLENBQUM7d0JBQ0YsY0FBYzt3QkFDZCxVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUMxQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDOUM7O0lBQ3FDLDhCQUFDO0NBQUEsQUFyQnZDLElBcUJ1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDaGVja291dE1vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE11bHRpU3RlcENoZWNrb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvbXVsdGktc3RlcC1jaGVja291dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlTW9kdWxlIH0gZnJvbSAnLi9kZWxpdmVyeS1tb2RlL2RlbGl2ZXJ5LW1vZGUubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RNb2R1bGUgfSBmcm9tICcuL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXZpZXdTdWJtaXRNb2R1bGUgfSBmcm9tICcuL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2hpcHBpbmdBZGRyZXNzTW9kdWxlIH0gZnJvbSAnLi9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIFNoaXBwaW5nQWRkcmVzc01vZHVsZSxcbiAgICBEZWxpdmVyeU1vZGVNb2R1bGUsXG4gICAgUGF5bWVudE1ldGhvZE1vZHVsZSxcbiAgICBSZXZpZXdTdWJtaXRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBNdWx0aVN0ZXBDaGVja291dENvbXBvbmVudDogeyBzZWxlY3RvcjogJ2N4LW11bHRpLXN0ZXAtY2hlY2tvdXQnIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIENoZWNrb3V0TW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW011bHRpU3RlcENoZWNrb3V0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTXVsdGlTdGVwQ2hlY2tvdXRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVN0ZXBDaGVja291dE1vZHVsZSB7fVxuIl19