/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlTranslationModule, } from '@spartacus/core';
import { PromotionsModule } from '../../../../lib/checkout/components/promotions/promotions.module';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
import { CartDetailsComponent } from './cart-details.component';
var CartDetailsModule = /** @class */ (function () {
    function CartDetailsModule() {
    }
    CartDetailsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CartSharedModule,
                        CommonModule,
                        RouterModule,
                        UrlTranslationModule,
                        PromotionsModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CartComponent: {
                                    selector: 'cx-cart-details',
                                },
                            },
                        }))),
                        I18nModule,
                    ],
                    declarations: [CartDetailsComponent],
                    exports: [CartDetailsComponent],
                    entryComponents: [CartDetailsComponent],
                },] }
    ];
    return CartDetailsModule;
}());
export { CartDetailsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRTtJQUFBO0lBb0JnQyxDQUFDOztnQkFwQmhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYixhQUFhLEVBQUU7b0NBQ2IsUUFBUSxFQUFFLGlCQUFpQjtpQ0FDNUI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMvQixlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDeEM7O0lBQytCLHdCQUFDO0NBQUEsQUFwQmpDLElBb0JpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENhcnREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJ0LWRldGFpbHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgICBQcm9tb3Rpb25zTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDYXJ0Q29tcG9uZW50OiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1jYXJ0LWRldGFpbHMnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXJ0RGV0YWlsc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYXJ0RGV0YWlsc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhcnREZXRhaWxzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydERldGFpbHNNb2R1bGUge31cbiJdfQ==