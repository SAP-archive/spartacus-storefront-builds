import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesConfigModule, I18nModule, provideDefaultConfig, } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBMEJ0RDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBeEI1QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztZQUM1RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztZQUN2RCxPQUFPLEVBQUU7Z0JBQ1Asb0JBQW9CO2dCQUNwQixZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsVUFBVTthQUNYO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFZO29CQUM5QixhQUFhLEVBQUU7d0JBQ2Isd0JBQXdCLEVBQUU7NEJBQ3hCLFNBQVMsRUFBRSxtQkFBbUI7eUJBQy9CO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUVELGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ3ZDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBsaWVkQ291cG9uc0NvbXBvbmVudCB9IGZyb20gJy4vYXBwbGllZC1jb3Vwb25zL2FwcGxpZWQtY291cG9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FydENvdXBvbkNvbXBvbmVudCB9IGZyb20gJy4vY2FydC1jb3Vwb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDYXJ0Q291cG9uQ29tcG9uZW50LCBBcHBsaWVkQ291cG9uc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXJ0Q291cG9uQ29tcG9uZW50LCBBcHBsaWVkQ291cG9uc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmdTZWxlY3RNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDYXJ0QXBwbHlDb3Vwb25Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENhcnRDb3Vwb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIGVudHJ5Q29tcG9uZW50czogW0NhcnRDb3Vwb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q291cG9uTW9kdWxlIHt9XG4iXX0=