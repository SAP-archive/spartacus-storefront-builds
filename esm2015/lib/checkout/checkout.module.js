/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutModule } from '@spartacus/core';
import { CartComponentModule } from '../../cms-components/checkout/cart/cart.module';
import { MultiStepCheckoutModule } from './components/multi-step-checkout/multi-step-checkout.module';
import { guards } from './guards/index';
export class CheckoutComponentModule {
}
CheckoutComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MultiStepCheckoutModule,
                    CartComponentModule,
                    CheckoutModule,
                ],
                providers: [...guards],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVd4QyxNQUFNLE9BQU8sdUJBQXVCOzs7WUFUbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQixjQUFjO2lCQUNmO2dCQUNELFNBQVMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dE1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0Q29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBNdWx0aVN0ZXBDaGVja291dE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L211bHRpLXN0ZXAtY2hlY2tvdXQubW9kdWxlJztcbmltcG9ydCB7IGd1YXJkcyB9IGZyb20gJy4vZ3VhcmRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNdWx0aVN0ZXBDaGVja291dE1vZHVsZSxcbiAgICBDYXJ0Q29tcG9uZW50TW9kdWxlLFxuICAgIENoZWNrb3V0TW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFsuLi5ndWFyZHNdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvbXBvbmVudE1vZHVsZSB7fVxuIl19