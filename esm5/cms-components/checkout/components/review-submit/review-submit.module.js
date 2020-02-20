import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, FeaturesConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/cart/cart-shared/cart-shared.module';
import { CardModule } from '../../../../shared/components/card/card.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { DeliveryModeSetGuard } from '../../guards/delivery-mode-set.guard';
import { PaymentDetailsSetGuard } from '../../guards/payment-details-set.guard';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { ReviewSubmitComponent } from './review-submit.component';
import { PromotionsModule } from '../promotions/promotions.module';
var ReviewSubmitModule = /** @class */ (function () {
    function ReviewSubmitModule() {
    }
    ReviewSubmitModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CardModule,
                CartSharedModule,
                I18nModule,
                UrlModule,
                RouterModule,
                PromotionsModule,
                FeaturesConfigModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutReviewOrder: {
                            component: ReviewSubmitComponent,
                            guards: [
                                CheckoutAuthGuard,
                                CartNotEmptyGuard,
                                ShippingAddressSetGuard,
                                DeliveryModeSetGuard,
                                PaymentDetailsSetGuard,
                            ],
                        },
                    },
                }),
            ],
            declarations: [ReviewSubmitComponent],
            entryComponents: [ReviewSubmitComponent],
            exports: [ReviewSubmitComponent],
        })
    ], ReviewSubmitModule);
    return ReviewSubmitModule;
}());
export { ReviewSubmitModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDbEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBK0JuRTtJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBN0I5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixVQUFVO2dCQUNWLGdCQUFnQjtnQkFDaEIsVUFBVTtnQkFDVixTQUFTO2dCQUNULFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixvQkFBb0I7Z0JBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQVk7b0JBQ2pDLGFBQWEsRUFBRTt3QkFDYixtQkFBbUIsRUFBRTs0QkFDbkIsU0FBUyxFQUFFLHFCQUFxQjs0QkFDaEMsTUFBTSxFQUFFO2dDQUNOLGlCQUFpQjtnQ0FDakIsaUJBQWlCO2dDQUNqQix1QkFBdUI7Z0NBQ3ZCLG9CQUFvQjtnQ0FDcEIsc0JBQXNCOzZCQUN2Qjt5QkFDRjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNyQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNqQyxDQUFDO09BQ1csa0JBQWtCLENBQUc7SUFBRCx5QkFBQztDQUFBLEFBQWxDLElBQWtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlU2V0R3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHNTZXRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9wYXltZW50LWRldGFpbHMtc2V0Lmd1YXJkJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL3NoaXBwaW5nLWFkZHJlc3Mtc2V0Lmd1YXJkJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IFJldmlld1N1Ym1pdENvbXBvbmVudCB9IGZyb20gJy4vcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4uL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRSZXZpZXdPcmRlcjoge1xuICAgICAgICAgIGNvbXBvbmVudDogUmV2aWV3U3VibWl0Q29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW1xuICAgICAgICAgICAgQ2hlY2tvdXRBdXRoR3VhcmQsXG4gICAgICAgICAgICBDYXJ0Tm90RW1wdHlHdWFyZCxcbiAgICAgICAgICAgIFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkLFxuICAgICAgICAgICAgRGVsaXZlcnlNb2RlU2V0R3VhcmQsXG4gICAgICAgICAgICBQYXltZW50RGV0YWlsc1NldEd1YXJkLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtSZXZpZXdTdWJtaXRDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtSZXZpZXdTdWJtaXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUmV2aWV3U3VibWl0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmV2aWV3U3VibWl0TW9kdWxlIHt9XG4iXX0=