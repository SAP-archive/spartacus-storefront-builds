import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesConfigModule, I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/cart/cart-shared/cart-shared.module';
import { CardModule } from '../../../../shared/components/card/card.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { DeliveryModeSetGuard } from '../../guards/delivery-mode-set.guard';
import { PaymentDetailsSetGuard } from '../../guards/payment-details-set.guard';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { ReviewSubmitComponent } from './review-submit.component';
import { PromotionsModule } from '../promotions/promotions.module';
let ReviewSubmitModule = class ReviewSubmitModule {
};
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
        ],
        providers: [
            provideDefaultConfig({
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
export { ReviewSubmitModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsRUFDcEIsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDbEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBaUNuRSxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQUFHLENBQUE7QUFBckIsa0JBQWtCO0lBL0I5QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsU0FBUztZQUNULFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsb0JBQW9CO1NBQ3JCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYixtQkFBbUIsRUFBRTt3QkFDbkIsU0FBUyxFQUFFLHFCQUFxQjt3QkFDaEMsTUFBTSxFQUFFOzRCQUNOLGlCQUFpQjs0QkFDakIsaUJBQWlCOzRCQUNqQix1QkFBdUI7NEJBQ3ZCLG9CQUFvQjs0QkFDcEIsc0JBQXNCO3lCQUN2QjtxQkFDRjtpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3JDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ2pDLENBQUM7R0FDVyxrQkFBa0IsQ0FBRztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlU2V0R3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvZGVsaXZlcnktbW9kZS1zZXQuZ3VhcmQnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHNTZXRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9wYXltZW50LWRldGFpbHMtc2V0Lmd1YXJkJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL3NoaXBwaW5nLWFkZHJlc3Mtc2V0Lmd1YXJkJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IFJldmlld1N1Ym1pdENvbXBvbmVudCB9IGZyb20gJy4vcmV2aWV3LXN1Ym1pdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4uL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0UmV2aWV3T3JkZXI6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldmlld1N1Ym1pdENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtcbiAgICAgICAgICAgIENoZWNrb3V0QXV0aEd1YXJkLFxuICAgICAgICAgICAgQ2FydE5vdEVtcHR5R3VhcmQsXG4gICAgICAgICAgICBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCxcbiAgICAgICAgICAgIERlbGl2ZXJ5TW9kZVNldEd1YXJkLFxuICAgICAgICAgICAgUGF5bWVudERldGFpbHNTZXRHdWFyZCxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmV2aWV3U3VibWl0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUmV2aWV3U3VibWl0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Jldmlld1N1Ym1pdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFJldmlld1N1Ym1pdE1vZHVsZSB7fVxuIl19