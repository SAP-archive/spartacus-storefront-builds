/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsModule } from '../../../../cms-components/product/index';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutModule } from '../../../../cms-structure/page/index';
import { ProductPageComponent } from './product-page.component';
import { OutletRefModule } from '../../../../cms-structure/outlet/outlet-ref/outlet-ref.module';
var ɵ0 = { cxRoute: 'product' };
/** @type {?} */
var routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: ProductPageComponent,
        data: ɵ0,
    },
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule.forChild(routes),
                        ProductDetailsModule,
                        PageLayoutModule,
                        OutletRefModule,
                    ],
                    declarations: [ProductPageComponent],
                    exports: [ProductPageComponent],
                },] }
    ];
    return ProductPageModule;
}());
export { ProductPageModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0RBQStELENBQUM7U0FPdEYsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFOztJQUwxQixNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUMzQixTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLElBQUksSUFBd0I7S0FDN0I7Q0FDRjtBQUVEO0lBQUE7SUFXZ0MsQ0FBQzs7Z0JBWGhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDN0Isb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEM7O0lBQytCLHdCQUFDO0NBQUEsQUFYakMsSUFXaUM7U0FBcEIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYubW9kdWxlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBudWxsLFxuICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3RQYWdlQ29tcG9uZW50LFxuICAgIGRhdGE6IHsgY3hSb3V0ZTogJ3Byb2R1Y3QnIH0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICAgIFByb2R1Y3REZXRhaWxzTW9kdWxlLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgT3V0bGV0UmVmTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0UGFnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0UGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlTW9kdWxlIHt9XG4iXX0=