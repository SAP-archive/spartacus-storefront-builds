import { __decorate } from "tslib";
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
var PaymentMethodModule = /** @class */ (function () {
    function PaymentMethodModule() {
    }
    PaymentMethodModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                PaymentFormModule,
                CardModule,
                SpinnerModule,
                I18nModule,
                ConfigModule.withConfig({
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
                }),
            ],
            providers: [UserService],
            declarations: [PaymentMethodComponent],
            entryComponents: [PaymentMethodComponent],
            exports: [PaymentMethodComponent],
        })
    ], PaymentMethodModule);
    return PaymentMethodModule;
}());
export { PaymentMethodModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBNkJwRTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsbUJBQW1CO1FBM0IvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZO2dCQUNaLGlCQUFpQjtnQkFDakIsVUFBVTtnQkFDVixhQUFhO2dCQUNiLFVBQVU7Z0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLHNCQUFzQixFQUFFOzRCQUN0QixTQUFTLEVBQUUsc0JBQXNCOzRCQUNqQyxNQUFNLEVBQUU7Z0NBQ04saUJBQWlCO2dDQUNqQixpQkFBaUI7Z0NBQ2pCLHVCQUF1QjtnQ0FDdkIsb0JBQW9COzZCQUNyQjt5QkFDRjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDeEIsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDdEMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDekMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDbEMsQ0FBQztPQUNXLG1CQUFtQixDQUFHO0lBQUQsMEJBQUM7Q0FBQSxBQUFuQyxJQUFtQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZVNldEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2RlbGl2ZXJ5LW1vZGUtc2V0Lmd1YXJkJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL3NoaXBwaW5nLWFkZHJlc3Mtc2V0Lmd1YXJkJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IFBheW1lbnRGb3JtTW9kdWxlIH0gZnJvbSAnLi9wYXltZW50LWZvcm0vcGF5bWVudC1mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXltZW50TWV0aG9kQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LW1ldGhvZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBQYXltZW50Rm9ybU1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRQYXltZW50RGV0YWlsczoge1xuICAgICAgICAgIGNvbXBvbmVudDogUGF5bWVudE1ldGhvZENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtcbiAgICAgICAgICAgIENoZWNrb3V0QXV0aEd1YXJkLFxuICAgICAgICAgICAgQ2FydE5vdEVtcHR5R3VhcmQsXG4gICAgICAgICAgICBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCxcbiAgICAgICAgICAgIERlbGl2ZXJ5TW9kZVNldEd1YXJkLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIGRlY2xhcmF0aW9uczogW1BheW1lbnRNZXRob2RDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQYXltZW50TWV0aG9kQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BheW1lbnRNZXRob2RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kTW9kdWxlIHt9XG4iXX0=