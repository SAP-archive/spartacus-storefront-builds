import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesConfigModule, I18nModule, provideDefaultConfig, } from '@spartacus/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBMEJ0RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFHLENBQUE7QUFBbkIsZ0JBQWdCO0lBeEI1QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztRQUM1RCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBQztRQUN2RCxPQUFPLEVBQUU7WUFDUCxvQkFBb0I7WUFDcEIsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFVBQVU7WUFDVixVQUFVO1NBQ1g7UUFDRCxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBWTtnQkFDOUIsYUFBYSxFQUFFO29CQUNiLHdCQUF3QixFQUFFO3dCQUN4QixTQUFTLEVBQUUsbUJBQW1CO3FCQUMvQjtpQkFDRjthQUNGLENBQUM7U0FDSDtRQUVELGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQ3ZDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBRztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IEFwcGxpZWRDb3Vwb25zQ29tcG9uZW50IH0gZnJvbSAnLi9hcHBsaWVkLWNvdXBvbnMvYXBwbGllZC1jb3Vwb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJ0Q291cG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJ0LWNvdXBvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NhcnRDb3Vwb25Db21wb25lbnQsIEFwcGxpZWRDb3Vwb25zQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhcnRDb3Vwb25Db21wb25lbnQsIEFwcGxpZWRDb3Vwb25zQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENhcnRBcHBseUNvdXBvbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ2FydENvdXBvbkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG5cbiAgZW50cnlDb21wb25lbnRzOiBbQ2FydENvdXBvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb3Vwb25Nb2R1bGUge31cbiJdfQ==