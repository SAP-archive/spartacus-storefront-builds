import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/cart/cart-shared/cart-shared.module';
import { CardModule } from '../../../../shared/components/card/card.module';
import { IconModule } from '../../../misc/icon/icon.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { PromotionsModule } from '../promotions/promotions.module';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { ReviewSubmitComponent } from './review-submit.component';
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
                IconModule,
            ],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        CheckoutReviewOrder: {
                            component: ReviewSubmitComponent,
                            guards: [CheckoutAuthGuard, CartNotEmptyGuard],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LXN1Ym1pdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3Jldmlldy1zdWJtaXQvcmV2aWV3LXN1Ym1pdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsVUFBVSxFQUNWLG9CQUFvQixFQUNwQixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNsRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBMkJsRTtJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBekI5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixVQUFVO2dCQUNWLGdCQUFnQjtnQkFDaEIsVUFBVTtnQkFDVixTQUFTO2dCQUNULFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixVQUFVO2FBQ1g7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYixtQkFBbUIsRUFBRTs0QkFDbkIsU0FBUyxFQUFFLHFCQUFxQjs0QkFDaEMsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7eUJBQy9DO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3hDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ2pDLENBQUM7T0FDVyxrQkFBa0IsQ0FBRztJQUFELHlCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQtYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBSZXZpZXdTdWJtaXRDb21wb25lbnQgfSBmcm9tICcuL3Jldmlldy1zdWJtaXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0UmV2aWV3T3JkZXI6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFJldmlld1N1Ym1pdENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtDaGVja291dEF1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmV2aWV3U3VibWl0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUmV2aWV3U3VibWl0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Jldmlld1N1Ym1pdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFJldmlld1N1Ym1pdE1vZHVsZSB7fVxuIl19