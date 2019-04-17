/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepCheckoutModule } from './components/multi-step-checkout/multi-step-checkout.module';
import { CartComponentModule } from './../cart/cart.module';
import { guards } from './guards/index';
import { CheckoutModule } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQ7SUFBQTtJQVNzQyxDQUFDOztnQkFUdEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQixjQUFjO3FCQUNmO29CQUNELFNBQVMsbUJBQU0sTUFBTSxDQUFDO2lCQUN2Qjs7SUFDcUMsOEJBQUM7Q0FBQSxBQVR2QyxJQVN1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE11bHRpU3RlcENoZWNrb3V0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL211bHRpLXN0ZXAtY2hlY2tvdXQvbXVsdGktc3RlcC1jaGVja291dC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vLi4vY2FydC9jYXJ0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IGd1YXJkcyB9IGZyb20gJy4vZ3VhcmRzL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0TW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTXVsdGlTdGVwQ2hlY2tvdXRNb2R1bGUsXG4gICAgQ2FydENvbXBvbmVudE1vZHVsZSxcbiAgICBDaGVja291dE1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbLi4uZ3VhcmRzXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDb21wb25lbnRNb2R1bGUge31cbiJdfQ==