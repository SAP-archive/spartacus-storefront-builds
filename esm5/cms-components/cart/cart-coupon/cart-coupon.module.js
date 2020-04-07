import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesConfigModule, I18nModule, provideDefaultConfig, } from '@spartacus/core';
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
                FeaturesConfigModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBMkJ6RDtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBekI1QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztZQUM1RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztZQUN2RCxPQUFPLEVBQUU7Z0JBQ1Asb0JBQW9CO2dCQUNwQixZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVixnQkFBZ0I7YUFDakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYix3QkFBd0IsRUFBRTs0QkFDeEIsU0FBUyxFQUFFLG1CQUFtQjt5QkFDL0I7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBRUQsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDdkMsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IEFwcGxpZWRDb3Vwb25zQ29tcG9uZW50IH0gZnJvbSAnLi9hcHBsaWVkLWNvdXBvbnMvYXBwbGllZC1jb3Vwb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJ0Q291cG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJ0LWNvdXBvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XG5pbXBvcnQgeyBGb3JtRXJyb3JzTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2FydENvdXBvbkNvbXBvbmVudCwgQXBwbGllZENvdXBvbnNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FydENvdXBvbkNvbXBvbmVudCwgQXBwbGllZENvdXBvbnNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE5nU2VsZWN0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDYXJ0QXBwbHlDb3Vwb25Db21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENhcnRDb3Vwb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIGVudHJ5Q29tcG9uZW50czogW0NhcnRDb3Vwb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q291cG9uTW9kdWxlIHt9XG4iXX0=