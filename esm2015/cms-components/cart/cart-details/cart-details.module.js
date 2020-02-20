import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, FeaturesConfigModule, } from '@spartacus/core';
import { PromotionsModule } from '../../checkout/components/promotions/promotions.module';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
import { CartCouponModule } from '../cart-coupon/cart-coupon.module';
import { CartDetailsComponent } from './cart-details.component';
let CartDetailsModule = class CartDetailsModule {
};
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
export { CartDetailsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBQ1Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUF3QmhFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0NBQUcsQ0FBQTtBQUFwQixpQkFBaUI7SUF0QjdCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixTQUFTO1lBQ1QsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2IsYUFBYSxFQUFFO3dCQUNiLFNBQVMsRUFBRSxvQkFBb0I7cUJBQ2hDO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLFVBQVU7U0FDWDtRQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQy9CLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ3hDLENBQUM7R0FDVyxpQkFBaUIsQ0FBRztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxuICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb21vdGlvbnNNb2R1bGUgfSBmcm9tICcuLi8uLi9jaGVja291dC9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0Q291cG9uTW9kdWxlIH0gZnJvbSAnLi4vY2FydC1jb3Vwb24vY2FydC1jb3Vwb24ubW9kdWxlJztcbmltcG9ydCB7IENhcnREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJ0LWRldGFpbHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENhcnRDb3Vwb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBQcm9tb3Rpb25zTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDYXJ0Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDYXJ0RGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FydERldGFpbHNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FydERldGFpbHNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDYXJ0RGV0YWlsc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnREZXRhaWxzTW9kdWxlIHt9XG4iXX0=