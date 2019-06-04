/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDetailsModule } from '../../cms-components/cart/cart-details/cart-details.module';
import { CmsModule, CmsPageGuard } from '../../cms-structure/index';
import { OutletRefModule } from '../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { PageLayoutModule } from '../../cms-structure/page/index';
import { CartPageComponent } from './cart-page.component';
const ɵ0 = { cxRoute: 'cart' };
/** @type {?} */
const routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: CartPageComponent,
        data: ɵ0,
    },
];
export class CartPageModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO1dBT2hELEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTs7TUFMdkIsTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDM0IsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixJQUFJLElBQXFCO0tBQzFCO0NBQ0Y7QUFhRCxNQUFNLE9BQU8sY0FBYzs7O1lBWDFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsU0FBUztpQkFDVjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FydERldGFpbHNNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtZGV0YWlscy9jYXJ0LWRldGFpbHMubW9kdWxlJztcbmltcG9ydCB7IENtc01vZHVsZSwgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9pbmRleCc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NhcnQtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IG51bGwsXG4gICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgIGNvbXBvbmVudDogQ2FydFBhZ2VDb21wb25lbnQsXG4gICAgZGF0YTogeyBjeFJvdXRlOiAnY2FydCcgfSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBDYXJ0RGV0YWlsc01vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXJ0UGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTW9kdWxlIHt9XG4iXX0=