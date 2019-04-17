/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UrlTranslationModule, ConfigModule, CheckoutModule, I18nModule, } from '@spartacus/core';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';
import { DeliveryModeModule } from './delivery-mode/delivery-mode.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { ReviewSubmitModule } from './review-submit/review-submit.module';
import { MultiStepCheckoutComponent } from './container/multi-step-checkout.component';
import { CartSharedModule } from '../../../cart/cart-shared/cart-shared.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc3RlcC1jaGVja291dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L211bHRpLXN0ZXAtY2hlY2tvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixZQUFZLEVBRVosY0FBYyxFQUNkLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRWhGO0lBQUE7SUFxQnNDLENBQUM7O2dCQXJCdEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLDBCQUEwQixFQUFFLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFOzZCQUNuRTt5QkFDRixFQUFBLENBQUM7d0JBQ0YsY0FBYzt3QkFDZCxVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUMxQyxlQUFlLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDOUM7O0lBQ3FDLDhCQUFDO0NBQUEsQUFyQnZDLElBcUJ1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NNb2R1bGUgfSBmcm9tICcuL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlTW9kdWxlIH0gZnJvbSAnLi9kZWxpdmVyeS1tb2RlL2RlbGl2ZXJ5LW1vZGUubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RNb2R1bGUgfSBmcm9tICcuL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXZpZXdTdWJtaXRNb2R1bGUgfSBmcm9tICcuL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlTdGVwQ2hlY2tvdXRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhaW5lci9tdWx0aS1zdGVwLWNoZWNrb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgU2hpcHBpbmdBZGRyZXNzTW9kdWxlLFxuICAgIERlbGl2ZXJ5TW9kZU1vZHVsZSxcbiAgICBQYXltZW50TWV0aG9kTW9kdWxlLFxuICAgIFJldmlld1N1Ym1pdE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIE11bHRpU3RlcENoZWNrb3V0Q29tcG9uZW50OiB7IHNlbGVjdG9yOiAnY3gtbXVsdGktc3RlcC1jaGVja291dCcgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQ2hlY2tvdXRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTXVsdGlTdGVwQ2hlY2tvdXRDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNdWx0aVN0ZXBDaGVja291dENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU3RlcENoZWNrb3V0TW9kdWxlIHt9XG4iXX0=