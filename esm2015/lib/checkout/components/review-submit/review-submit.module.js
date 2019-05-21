/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule, AuthGuard } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/checkout/cart/cart-shared/cart-shared.module';
import { CardModule } from '../../../../shared/components/card/card.module';
import { ReviewSubmitComponent } from './review-submit.component';
import { ConfigModule } from '@spartacus/core';
import { PaymentDetailsSetGuard } from '../../guards/payment-details-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/checkout/cart/cart-not-empty.guard';
import { ShippingAddressSetGuard } from './../../guards/shipping-address-set.guard';
import { DeliveryModeSetGuard } from './../../guards/delivery-mode-set.guard';
export class ReviewSubmitModule {
}
ReviewSubmitModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CardModule,
                    CartSharedModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutReviewOrder: {
                                selector: 'cx-review-submit',
                                guards: [
                                    AuthGuard,
                                    CartNotEmptyGuard,
                                    ShippingAddressSetGuard,
                                    DeliveryModeSetGuard,
                                    PaymentDetailsSetGuard,
                                ],
                            },
                        },
                    }))),
                ],
                declarations: [ReviewSubmitComponent],
                entryComponents: [ReviewSubmitComponent],
                exports: [ReviewSubmitComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9yZXZpZXctc3VibWl0L3Jldmlldy1zdWJtaXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUEyQjlFLE1BQU0sT0FBTyxrQkFBa0I7OztZQXpCOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFVBQVU7b0JBQ1YsZ0JBQWdCO29CQUNoQixVQUFVO29CQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYixtQkFBbUIsRUFBRTtnQ0FDbkIsUUFBUSxFQUFFLGtCQUFrQjtnQ0FDNUIsTUFBTSxFQUFFO29DQUNOLFNBQVM7b0NBQ1QsaUJBQWlCO29DQUNqQix1QkFBdUI7b0NBQ3ZCLG9CQUFvQjtvQ0FDcEIsc0JBQXNCO2lDQUN2Qjs2QkFDRjt5QkFDRjtxQkFDRixFQUFBLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUN4QyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSTE4bk1vZHVsZSwgQXV0aEd1YXJkIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jaGVja291dC9jYXJ0L2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXZpZXdTdWJtaXRDb21wb25lbnQgfSBmcm9tICcuL3Jldmlldy1zdWJtaXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzU2V0R3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvcGF5bWVudC1kZXRhaWxzLXNldC5ndWFyZCc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCB9IGZyb20gJy4vLi4vLi4vZ3VhcmRzL3NoaXBwaW5nLWFkZHJlc3Mtc2V0Lmd1YXJkJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZVNldEd1YXJkIH0gZnJvbSAnLi8uLi8uLi9ndWFyZHMvZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dFJldmlld09yZGVyOiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1yZXZpZXctc3VibWl0JyxcbiAgICAgICAgICBndWFyZHM6IFtcbiAgICAgICAgICAgIEF1dGhHdWFyZCxcbiAgICAgICAgICAgIENhcnROb3RFbXB0eUd1YXJkLFxuICAgICAgICAgICAgU2hpcHBpbmdBZGRyZXNzU2V0R3VhcmQsXG4gICAgICAgICAgICBEZWxpdmVyeU1vZGVTZXRHdWFyZCxcbiAgICAgICAgICAgIFBheW1lbnREZXRhaWxzU2V0R3VhcmQsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Jldmlld1N1Ym1pdENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1Jldmlld1N1Ym1pdENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSZXZpZXdTdWJtaXRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXZpZXdTdWJtaXRNb2R1bGUge31cbiJdfQ==