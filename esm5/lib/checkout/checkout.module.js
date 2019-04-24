/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutModule } from '@spartacus/core';
import { CartComponentModule } from '../../cms-components/checkout/cart/cart.module';
import { MultiStepCheckoutModule } from './components/multi-step-checkout/multi-step-checkout.module';
import { guards } from './guards/index';
var CheckoutComponentModule = /** @class */ (function () {
    function CheckoutComponentModule() {
    }
    CheckoutComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MultiStepCheckoutModule,
                        CartComponentModule,
                        CheckoutModule,
                    ],
                    providers: tslib_1.__spread(guards),
                },] }
    ];
    return CheckoutComponentModule;
}());
export { CheckoutComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEM7SUFBQTtJQVNzQyxDQUFDOztnQkFUdEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQixjQUFjO3FCQUNmO29CQUNELFNBQVMsbUJBQU0sTUFBTSxDQUFDO2lCQUN2Qjs7SUFDcUMsOEJBQUM7Q0FBQSxBQVR2QyxJQVN1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0TW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcnRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy9jaGVja291dC9jYXJ0L2NhcnQubW9kdWxlJztcbmltcG9ydCB7IE11bHRpU3RlcENoZWNrb3V0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL211bHRpLXN0ZXAtY2hlY2tvdXQvbXVsdGktc3RlcC1jaGVja291dC5tb2R1bGUnO1xuaW1wb3J0IHsgZ3VhcmRzIH0gZnJvbSAnLi9ndWFyZHMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE11bHRpU3RlcENoZWNrb3V0TW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgQ2hlY2tvdXRNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogWy4uLmd1YXJkc10sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIHt9XG4iXX0=