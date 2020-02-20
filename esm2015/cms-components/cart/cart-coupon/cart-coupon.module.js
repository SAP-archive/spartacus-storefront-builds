import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule, FeaturesConfigModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { AppliedCouponsComponent } from './applied-coupons/applied-coupons.component';
import { CartCouponComponent } from './cart-coupon.component';
import { NgSelectModule } from '@ng-select/ng-select';
let CartCouponModule = class CartCouponModule {
};
CartCouponModule = __decorate([
    NgModule({
        declarations: [CartCouponComponent, AppliedCouponsComponent],
        exports: [CartCouponComponent, AppliedCouponsComponent],
        imports: [
            FeaturesConfigModule,
            CommonModule,
            NgSelectModule,
            FormsModule,
            ReactiveFormsModule,
            I18nModule,
            IconModule,
            ConfigModule.withConfig({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBdUJ0RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFHLENBQUE7QUFBbkIsZ0JBQWdCO0lBckI1QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztRQUM1RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztRQUN2RCxPQUFPLEVBQUU7WUFDUCxvQkFBb0I7WUFDcEIsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFVBQVU7WUFDVixVQUFVO1lBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLHdCQUF3QixFQUFFO3dCQUN4QixTQUFTLEVBQUUsbUJBQW1CO3FCQUMvQjtpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQ3ZDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBRztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBsaWVkQ291cG9uc0NvbXBvbmVudCB9IGZyb20gJy4vYXBwbGllZC1jb3Vwb25zL2FwcGxpZWQtY291cG9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FydENvdXBvbkNvbXBvbmVudCB9IGZyb20gJy4vY2FydC1jb3Vwb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDYXJ0Q291cG9uQ29tcG9uZW50LCBBcHBsaWVkQ291cG9uc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXJ0Q291cG9uQ29tcG9uZW50LCBBcHBsaWVkQ291cG9uc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmdTZWxlY3RNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENhcnRBcHBseUNvdXBvbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2FydENvdXBvbkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhcnRDb3Vwb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q291cG9uTW9kdWxlIHt9XG4iXX0=