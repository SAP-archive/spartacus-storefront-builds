/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from '../../../lib/ui/pages/product-page/product-page.component';
import { ProductPageModule } from '../../../lib/ui/pages/product-page/product-page.module';
import { CmsPageGuard } from '../../guards/cms-page.guard';
import { PageLayoutComponent } from '../../page/index';
import { suffixUrlMatcher } from './suffix-url-matcher';
var ɵ0 = {
    cxSuffixUrlMatcher: {
        marker: 'p',
        paramName: 'productCode',
    },
}, ɵ1 = {
    cxSuffixUrlMatcher: {
        marker: 'c',
        paramName: 'categoryCode',
    },
};
var SuffixRoutesModule = /** @class */ (function () {
    function SuffixRoutesModule() {
    }
    SuffixRoutesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ProductPageModule,
                        RouterModule.forChild([
                            {
                                matcher: suffixUrlMatcher,
                                canActivate: [CmsPageGuard],
                                component: ProductPageComponent,
                                data: ɵ0,
                            },
                            {
                                matcher: suffixUrlMatcher,
                                canActivate: [CmsPageGuard],
                                component: PageLayoutComponent,
                                data: ɵ1,
                            },
                        ]),
                    ],
                },] }
    ];
    return SuffixRoutesModule;
}());
export { SuffixRoutesModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VmZml4LXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3JvdXRpbmcvc3VmZml4LXJvdXRlcy9zdWZmaXgtcm91dGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO1NBVTFDO0lBQ0osa0JBQWtCLEVBQUU7UUFDbEIsTUFBTSxFQUFFLEdBQUc7UUFDWCxTQUFTLEVBQUUsYUFBYTtLQUN6QjtDQUNGLE9BTUs7SUFDSixrQkFBa0IsRUFBRTtRQUNsQixNQUFNLEVBQUUsR0FBRztRQUNYLFNBQVMsRUFBRSxjQUFjO0tBQzFCO0NBQ0Y7QUF4QlQ7SUFBQTtJQTZCaUMsQ0FBQzs7Z0JBN0JqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEI7Z0NBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQ0FDekIsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO2dDQUMzQixTQUFTLEVBQUUsb0JBQW9CO2dDQUMvQixJQUFJLElBS0g7NkJBQ0Y7NEJBQ0Q7Z0NBQ0UsT0FBTyxFQUFFLGdCQUFnQjtnQ0FDekIsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO2dDQUMzQixTQUFTLEVBQUUsbUJBQW1CO2dDQUM5QixJQUFJLElBS0g7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRjs7SUFDZ0MseUJBQUM7Q0FBQSxBQTdCbEMsSUE2QmtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvZHVjdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9saWIvdWkvcGFnZXMvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZHVjdFBhZ2VNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9saWIvdWkvcGFnZXMvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlL2luZGV4JztcbmltcG9ydCB7IHN1ZmZpeFVybE1hdGNoZXIgfSBmcm9tICcuL3N1ZmZpeC11cmwtbWF0Y2hlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQcm9kdWN0UGFnZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBtYXRjaGVyOiBzdWZmaXhVcmxNYXRjaGVyLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUHJvZHVjdFBhZ2VDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFN1ZmZpeFVybE1hdGNoZXI6IHtcbiAgICAgICAgICAgIG1hcmtlcjogJ3AnLFxuICAgICAgICAgICAgcGFyYW1OYW1lOiAncHJvZHVjdENvZGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXRjaGVyOiBzdWZmaXhVcmxNYXRjaGVyLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGN4U3VmZml4VXJsTWF0Y2hlcjoge1xuICAgICAgICAgICAgbWFya2VyOiAnYycsXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdjYXRlZ29yeUNvZGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdWZmaXhSb3V0ZXNNb2R1bGUge31cbiJdfQ==