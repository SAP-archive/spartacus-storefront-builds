import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, FeaturesConfigModule, } from '@spartacus/core';
import { PromotionsModule } from '../../checkout/components/promotions/promotions.module';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
import { CartCouponModule } from '../cart-coupon/cart-coupon.module';
import { CartDetailsComponent } from './cart-details.component';
var CartDetailsModule = /** @class */ (function () {
    function CartDetailsModule() {
    }
    CartDetailsModule = __decorate([
        NgModule({
            imports: [
                CartSharedModule,
                CommonModule,
                CartCouponModule,
                RouterModule,
                UrlModule,
                PromotionsModule,
                FeaturesConfigModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CartComponent: {
                            component: CartDetailsComponent,
                        },
                    },
                }),
                I18nModule,
            ],
            declarations: [CartDetailsComponent],
            exports: [CartDetailsComponent],
            entryComponents: [CartDetailsComponent],
        })
    ], CartDetailsModule);
    return CartDetailsModule;
}());
export { CartDetailsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUF3QmhFO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixpQkFBaUI7UUF0QjdCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsZ0JBQWdCO2dCQUNoQixvQkFBb0I7Z0JBQ3BCLFlBQVksQ0FBQyxVQUFVLENBQVk7b0JBQ2pDLGFBQWEsRUFBRTt3QkFDYixhQUFhLEVBQUU7NEJBQ2IsU0FBUyxFQUFFLG9CQUFvQjt5QkFDaEM7cUJBQ0Y7aUJBQ0YsQ0FBQztnQkFDRixVQUFVO2FBQ1g7WUFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUMvQixlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUN4QyxDQUFDO09BQ1csaUJBQWlCLENBQUc7SUFBRCx3QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG4gIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvbW90aW9uc01vZHVsZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENhcnRDb3Vwb25Nb2R1bGUgfSBmcm9tICcuLi9jYXJ0LWNvdXBvbi9jYXJ0LWNvdXBvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2NhcnQtZGV0YWlscy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FydFNoYXJlZE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FydENvdXBvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENhcnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENhcnREZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXJ0RGV0YWlsc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXJ0RGV0YWlsc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhcnREZXRhaWxzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydERldGFpbHNNb2R1bGUge31cbiJdfQ==