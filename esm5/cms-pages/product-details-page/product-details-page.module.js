/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsModule } from '../../cms-components/product/product-details/index';
import { CmsPageGuard } from '../../cms-structure/guards/cms-page.guard';
import { OutletRefModule } from '../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { PageLayoutModule } from '../../cms-structure/page/page-layout/page-layout.module';
import { suffixUrlMatcher } from '../../cms-structure/routing/suffix-routes/suffix-url-matcher';
import { ProductDetailsPageComponent } from './product-details-page.component';
var ɵ0 = { cxRoute: 'product' }, ɵ1 = {
    cxSuffixUrlMatcher: {
        marker: 'p',
        paramName: 'productCode',
    },
};
/** @type {?} */
var routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: ProductDetailsPageComponent,
        data: ɵ0,
    },
    {
        matcher: suffixUrlMatcher,
        canActivate: [CmsPageGuard],
        component: ProductDetailsPageComponent,
        data: ɵ1,
    },
];
var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule.forChild(routes),
                        ProductDetailsModule,
                        PageLayoutModule,
                        OutletRefModule,
                    ],
                    declarations: [ProductDetailsPageComponent],
                    exports: [ProductDetailsPageComponent],
                },] }
    ];
    return ProductDetailsPageModule;
}());
export { ProductDetailsPageModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDaEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7U0FPckUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BTXRCO0lBQ0osa0JBQWtCLEVBQUU7UUFDbEIsTUFBTSxFQUFFLEdBQUc7UUFDWCxTQUFTLEVBQUUsYUFBYTtLQUN6QjtDQUNGOztJQWhCQyxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUMzQixTQUFTLEVBQUUsMkJBQTJCO1FBQ3RDLElBQUksSUFBd0I7S0FDN0I7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQzNCLFNBQVMsRUFBRSwyQkFBMkI7UUFDdEMsSUFBSSxJQUtIO0tBQ0Y7Q0FDRjtBQUVEO0lBQUE7SUFXdUMsQ0FBQzs7Z0JBWHZDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDN0Isb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDdkM7O0lBQ3NDLCtCQUFDO0NBQUEsQUFYeEMsSUFXd0M7U0FBM0Isd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc01vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IE91dGxldFJlZk1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC1yZWYvb3V0bGV0LXJlZi5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgc3VmZml4VXJsTWF0Y2hlciB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9zdWZmaXgtcm91dGVzL3N1ZmZpeC11cmwtbWF0Y2hlcic7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtZGV0YWlscy1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogbnVsbCxcbiAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgY29tcG9uZW50OiBQcm9kdWN0RGV0YWlsc1BhZ2VDb21wb25lbnQsXG4gICAgZGF0YTogeyBjeFJvdXRlOiAncHJvZHVjdCcgfSxcbiAgfSxcbiAge1xuICAgIG1hdGNoZXI6IHN1ZmZpeFVybE1hdGNoZXIsXG4gICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdERldGFpbHNQYWdlQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgIGN4U3VmZml4VXJsTWF0Y2hlcjoge1xuICAgICAgICBtYXJrZXI6ICdwJyxcbiAgICAgICAgcGFyYW1OYW1lOiAncHJvZHVjdENvZGUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICBQcm9kdWN0RGV0YWlsc01vZHVsZSxcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICAgIE91dGxldFJlZk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdERldGFpbHNQYWdlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3REZXRhaWxzUGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSB7fVxuIl19