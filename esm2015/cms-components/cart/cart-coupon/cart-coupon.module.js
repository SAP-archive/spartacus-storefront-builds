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
let CartCouponModule = class CartCouponModule {
};
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
export { CartCouponModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQWEsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQTBCekQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FBRyxDQUFBO0FBQW5CLGdCQUFnQjtJQXhCNUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUM7UUFDNUQsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUM7UUFDdkQsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFVBQVU7WUFDVixVQUFVO1lBQ1YsZ0JBQWdCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYix3QkFBd0IsRUFBRTt3QkFDeEIsU0FBUyxFQUFFLG1CQUFtQjtxQkFDL0I7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFFRCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUN2QyxDQUFDO0dBQ1csZ0JBQWdCLENBQUc7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENtc0NvbmZpZywgSTE4bk1vZHVsZSwgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBsaWVkQ291cG9uc0NvbXBvbmVudCB9IGZyb20gJy4vYXBwbGllZC1jb3Vwb25zL2FwcGxpZWQtY291cG9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FydENvdXBvbkNvbXBvbmVudCB9IGZyb20gJy4vY2FydC1jb3Vwb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgRm9ybUVycm9yc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NhcnRDb3Vwb25Db21wb25lbnQsIEFwcGxpZWRDb3Vwb25zQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhcnRDb3Vwb25Db21wb25lbnQsIEFwcGxpZWRDb3Vwb25zQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2FydEFwcGx5Q291cG9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDYXJ0Q291cG9uQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcblxuICBlbnRyeUNvbXBvbmVudHM6IFtDYXJ0Q291cG9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvdXBvbk1vZHVsZSB7fVxuIl19