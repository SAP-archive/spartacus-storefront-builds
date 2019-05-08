/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDetailsModule } from '../../../../cms-components/checkout/cart/cart-details/cart-details.module';
import { OutletRefModule } from '../../../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { PageLayoutModule } from '../../../../cms-structure/page/index';
import { CmsModule } from '../../../cms/cms.module';
import { CmsPageGuard } from '../../../cms/guards/cms-page.guard';
import { CartPageComponent } from './cart-page.component';
var ɵ0 = { pageLabel: 'cartPage', cxRoute: 'cart' };
/** @type {?} */
var routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: CartPageComponent,
        data: ɵ0,
    },
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule.forChild(routes),
                        PageLayoutModule,
                        CartDetailsModule,
                        OutletRefModule,
                        CmsModule,
                    ],
                    declarations: [CartPageComponent],
                },] }
    ];
    return CartPageModule;
}());
export { CartPageModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO1NBT2hELEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFOztJQUw5QyxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUMzQixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLElBQUksSUFBNEM7S0FDakQ7Q0FDRjtBQUVEO0lBQUE7SUFXNkIsQ0FBQzs7Z0JBWDdCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDN0IsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsU0FBUztxQkFDVjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDbEM7O0lBQzRCLHFCQUFDO0NBQUEsQUFYOUIsSUFXOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FydERldGFpbHNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jaGVja291dC9jYXJ0L2NhcnQtZGV0YWlscy9jYXJ0LWRldGFpbHMubW9kdWxlJztcbmltcG9ydCB7IE91dGxldFJlZk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC1yZWYvb3V0bGV0LXJlZi5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi8uLi9jbXMvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IENhcnRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJ0LXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBudWxsLFxuICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICBjb21wb25lbnQ6IENhcnRQYWdlQ29tcG9uZW50LFxuICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnY2FydFBhZ2UnLCBjeFJvdXRlOiAnY2FydCcgfSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBDYXJ0RGV0YWlsc01vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXJ0UGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTW9kdWxlIHt9XG4iXX0=