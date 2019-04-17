/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepCheckoutModule } from './components/multi-step-checkout/multi-step-checkout.module';
import { CartComponentModule } from './../cart/cart.module';
import { guards } from './guards/index';
import { CheckoutModule } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVVqRCxNQUFNLE9BQU8sdUJBQXVCOzs7WUFUbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQixjQUFjO2lCQUNmO2dCQUNELFNBQVMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNdWx0aVN0ZXBDaGVja291dE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L211bHRpLXN0ZXAtY2hlY2tvdXQubW9kdWxlJztcbmltcG9ydCB7IENhcnRDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLy4uL2NhcnQvY2FydC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBndWFyZHMgfSBmcm9tICcuL2d1YXJkcy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dE1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE11bHRpU3RlcENoZWNrb3V0TW9kdWxlLFxuICAgIENhcnRDb21wb25lbnRNb2R1bGUsXG4gICAgQ2hlY2tvdXRNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogWy4uLmd1YXJkc10sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0Q29tcG9uZW50TW9kdWxlIHt9XG4iXX0=