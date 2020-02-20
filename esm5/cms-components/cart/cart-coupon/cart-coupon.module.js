import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule, FeaturesConfigModule, } from '@spartacus/core';
import { IconModule } from '../../../cms-components/misc/icon/icon.module';
import { AppliedCouponsComponent } from './applied-coupons/applied-coupons.component';
import { CartCouponComponent } from './cart-coupon.component';
import { NgSelectModule } from '@ng-select/ng-select';
var CartCouponModule = /** @class */ (function () {
    function CartCouponModule() {
    }
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
    return CartCouponModule;
}());
export { CartCouponModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBdUJ0RDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBckI1QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztZQUM1RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztZQUN2RCxPQUFPLEVBQUU7Z0JBQ1Asb0JBQW9CO2dCQUNwQixZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2Isd0JBQXdCLEVBQUU7NEJBQ3hCLFNBQVMsRUFBRSxtQkFBbUI7eUJBQy9CO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ3ZDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwbGllZENvdXBvbnNDb21wb25lbnQgfSBmcm9tICcuL2FwcGxpZWQtY291cG9ucy9hcHBsaWVkLWNvdXBvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IENhcnRDb3Vwb25Db21wb25lbnQgfSBmcm9tICcuL2NhcnQtY291cG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2FydENvdXBvbkNvbXBvbmVudCwgQXBwbGllZENvdXBvbnNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FydENvdXBvbkNvbXBvbmVudCwgQXBwbGllZENvdXBvbnNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5nU2VsZWN0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDYXJ0QXBwbHlDb3Vwb25Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENhcnRDb3Vwb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDYXJ0Q291cG9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvdXBvbk1vZHVsZSB7fVxuIl19