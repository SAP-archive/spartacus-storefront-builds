/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UserService, } from '@spartacus/core';
import { CardModule } from '../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { DeliveryModeSetGuard } from '../../guards/delivery-mode-set.guard';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { PaymentFormModule } from './payment-form/payment-form.module';
import { PaymentMethodComponent } from './payment-method.component';
export class PaymentMethodModule {
}
PaymentMethodModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    PaymentFormModule,
                    CardModule,
                    SpinnerModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutPaymentDetails: {
                                component: PaymentMethodComponent,
                                guards: [
                                    CheckoutAuthGuard,
                                    CartNotEmptyGuard,
                                    ShippingAddressSetGuard,
                                    DeliveryModeSetGuard,
                                ],
                            },
                        },
                    }))),
                ],
                providers: [UserService],
                declarations: [PaymentMethodComponent],
                entryComponents: [PaymentMethodComponent],
                exports: [PaymentMethodComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBNkJwRSxNQUFNLE9BQU8sbUJBQW1COzs7WUEzQi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsVUFBVTtvQkFDVixhQUFhO29CQUNiLFVBQVU7b0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLHNCQUFzQixFQUFFO2dDQUN0QixTQUFTLEVBQUUsc0JBQXNCO2dDQUNqQyxNQUFNLEVBQUU7b0NBQ04saUJBQWlCO29DQUNqQixpQkFBaUI7b0NBQ2pCLHVCQUF1QjtvQ0FDdkIsb0JBQW9CO2lDQUNyQjs2QkFDRjt5QkFDRjtxQkFDRixFQUFBLENBQUM7aUJBQ0g7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUN4QixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDdEMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQtYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGVTZXRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9kZWxpdmVyeS1tb2RlLXNldC5ndWFyZCc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9zaGlwcGluZy1hZGRyZXNzLXNldC5ndWFyZCc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBQYXltZW50Rm9ybU1vZHVsZSB9IGZyb20gJy4vcGF5bWVudC1mb3JtL3BheW1lbnQtZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZENvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1tZXRob2QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUGF5bWVudEZvcm1Nb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0UGF5bWVudERldGFpbHM6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFBheW1lbnRNZXRob2RDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbXG4gICAgICAgICAgICBDaGVja291dEF1dGhHdWFyZCxcbiAgICAgICAgICAgIENhcnROb3RFbXB0eUd1YXJkLFxuICAgICAgICAgICAgU2hpcHBpbmdBZGRyZXNzU2V0R3VhcmQsXG4gICAgICAgICAgICBEZWxpdmVyeU1vZGVTZXRHdWFyZCxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICBkZWNsYXJhdGlvbnM6IFtQYXltZW50TWV0aG9kQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGF5bWVudE1ldGhvZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQYXltZW50TWV0aG9kQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZE1vZHVsZSB7fVxuIl19