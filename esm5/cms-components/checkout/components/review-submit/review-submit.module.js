/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/cart/cart-shared/cart-shared.module';
import { CardModule } from '../../../../shared/components/card/card.module';
import { DeliveryModeSetGuard } from '../../guards/delivery-mode-set.guard';
import { PaymentDetailsSetGuard } from '../../guards/payment-details-set.guard';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { ReviewSubmitComponent } from './review-submit.component';
var ReviewSubmitModule = /** @class */ (function () {
    function ReviewSubmitModule() {
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
                                    component: ReviewSubmitComponent,
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
    return ReviewSubmitModule;
}());
export { ReviewSubmitModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUFBO0lBeUJpQyxDQUFDOztnQkF6QmpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixVQUFVO3dCQUNWLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsbUJBQW1CLEVBQUU7b0NBQ25CLFNBQVMsRUFBRSxxQkFBcUI7b0NBQ2hDLE1BQU0sRUFBRTt3Q0FDTixTQUFTO3dDQUNULGlCQUFpQjt3Q0FDakIsdUJBQXVCO3dDQUN2QixvQkFBb0I7d0NBQ3BCLHNCQUFzQjtxQ0FDdkI7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNyQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7aUJBQ2pDOztJQUNnQyx5QkFBQztDQUFBLEFBekJsQyxJQXlCa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZVNldEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2RlbGl2ZXJ5LW1vZGUtc2V0Lmd1YXJkJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzU2V0R3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvcGF5bWVudC1kZXRhaWxzLXNldC5ndWFyZCc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9zaGlwcGluZy1hZGRyZXNzLXNldC5ndWFyZCc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBSZXZpZXdTdWJtaXRDb21wb25lbnQgfSBmcm9tICcuL3Jldmlldy1zdWJtaXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRSZXZpZXdPcmRlcjoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV2aWV3U3VibWl0Q29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW1xuICAgICAgICAgICAgQXV0aEd1YXJkLFxuICAgICAgICAgICAgQ2FydE5vdEVtcHR5R3VhcmQsXG4gICAgICAgICAgICBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCxcbiAgICAgICAgICAgIERlbGl2ZXJ5TW9kZVNldEd1YXJkLFxuICAgICAgICAgICAgUGF5bWVudERldGFpbHNTZXRHdWFyZCxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmV2aWV3U3VibWl0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUmV2aWV3U3VibWl0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Jldmlld1N1Ym1pdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFJldmlld1N1Ym1pdE1vZHVsZSB7fVxuIl19