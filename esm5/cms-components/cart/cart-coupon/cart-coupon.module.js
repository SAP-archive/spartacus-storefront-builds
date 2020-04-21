import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { AppliedCouponsComponent } from './applied-coupons/applied-coupons.component';
import { CartCouponComponent } from './cart-coupon.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormErrorsModule } from '../../../shared/index';
var CartCouponModule = /** @class */ (function () {
    function CartCouponModule() {
    }
    CartCouponModule = __decorate([
        NgModule({
            declarations: [CartCouponComponent, AppliedCouponsComponent],
            exports: [CartCouponComponent, AppliedCouponsComponent],
            imports: [
                CommonModule,
                NgSelectModule,
                FormsModule,
                ReactiveFormsModule,
                I18nModule,
                IconModule,
                FormErrorsModule,
            ],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        CartApplyCouponComponent: {
                            component: CartCouponComponent,
                        },
                    },
                }),
            ],
            entryComponents: [CartCouponComponent],
        })
    ], CartCouponModule);
    return CartCouponModule;
}());
export { CartCouponModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQWEsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQTBCekQ7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQXhCNUIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUM7WUFDNUQsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUM7WUFDdkQsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsVUFBVTtnQkFDVixVQUFVO2dCQUNWLGdCQUFnQjthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBWTtvQkFDOUIsYUFBYSxFQUFFO3dCQUNiLHdCQUF3QixFQUFFOzRCQUN4QixTQUFTLEVBQUUsbUJBQW1CO3lCQUMvQjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFFRCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUN2QyxDQUFDO09BQ1csZ0JBQWdCLENBQUc7SUFBRCx1QkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDbXNDb25maWcsIEkxOG5Nb2R1bGUsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwbGllZENvdXBvbnNDb21wb25lbnQgfSBmcm9tICcuL2FwcGxpZWQtY291cG9ucy9hcHBsaWVkLWNvdXBvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IENhcnRDb3Vwb25Db21wb25lbnQgfSBmcm9tICcuL2NhcnQtY291cG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcbmltcG9ydCB7IEZvcm1FcnJvcnNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDYXJ0Q291cG9uQ29tcG9uZW50LCBBcHBsaWVkQ291cG9uc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXJ0Q291cG9uQ29tcG9uZW50LCBBcHBsaWVkQ291cG9uc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmdTZWxlY3RNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgRm9ybUVycm9yc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENhcnRBcHBseUNvdXBvbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2FydENvdXBvbkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG5cbiAgZW50cnlDb21wb25lbnRzOiBbQ2FydENvdXBvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb3Vwb25Nb2R1bGUge31cbiJdfQ==