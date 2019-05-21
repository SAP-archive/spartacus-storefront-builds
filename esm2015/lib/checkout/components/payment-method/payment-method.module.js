/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService, ConfigModule, I18nModule, AuthGuard, } from '@spartacus/core';
import { PaymentFormModule } from './payment-form/payment-form.module';
import { CardModule } from '../../../../shared/components/card/card.module';
import { PaymentMethodComponent } from './payment-method.component';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { DeliveryModeSetGuard } from '../../guards/delivery-mode-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/checkout/cart/cart-not-empty.guard';
import { ShippingAddressSetGuard } from './../../guards/shipping-address-set.guard';
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
                                selector: 'cx-payment-method',
                                guards: [
                                    AuthGuard,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLFdBQVcsRUFDWCxZQUFZLEVBRVosVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUE0QnBGLE1BQU0sT0FBTyxtQkFBbUI7OztZQTNCL0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixVQUFVO29CQUNWLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2Isc0JBQXNCLEVBQUU7Z0NBQ3RCLFFBQVEsRUFBRSxtQkFBbUI7Z0NBQzdCLE1BQU0sRUFBRTtvQ0FDTixTQUFTO29DQUNULGlCQUFpQjtvQ0FDakIsdUJBQXVCO29DQUN2QixvQkFBb0I7aUNBQ3JCOzZCQUNGO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztpQkFDSDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ3hCLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDekMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIFVzZXJTZXJ2aWNlLFxuICBDb25maWdNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgQXV0aEd1YXJkLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGF5bWVudEZvcm1Nb2R1bGUgfSBmcm9tICcuL3BheW1lbnQtZm9ybS9wYXltZW50LWZvcm0ubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFBheW1lbnRNZXRob2RDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGVTZXRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9kZWxpdmVyeS1tb2RlLXNldC5ndWFyZCc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCB9IGZyb20gJy4vLi4vLi4vZ3VhcmRzL3NoaXBwaW5nLWFkZHJlc3Mtc2V0Lmd1YXJkJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFBheW1lbnRGb3JtTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dFBheW1lbnREZXRhaWxzOiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZCcsXG4gICAgICAgICAgZ3VhcmRzOiBbXG4gICAgICAgICAgICBBdXRoR3VhcmQsXG4gICAgICAgICAgICBDYXJ0Tm90RW1wdHlHdWFyZCxcbiAgICAgICAgICAgIFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkLFxuICAgICAgICAgICAgRGVsaXZlcnlNb2RlU2V0R3VhcmQsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGF5bWVudE1ldGhvZENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1BheW1lbnRNZXRob2RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGF5bWVudE1ldGhvZENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRNZXRob2RNb2R1bGUge31cbiJdfQ==