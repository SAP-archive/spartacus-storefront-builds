/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageLayoutComponent } from '../../cms-structure/page/index';
import { CmsPageGuard } from '../cms/guards/cms-page.guard';
import { ProductPageComponent } from '../ui/pages/product-page/product-page.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VmZml4LXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3VmZml4LXJvdXRlcy9zdWZmaXgtcm91dGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO1NBUzFDO0lBQ0osa0JBQWtCLEVBQUU7UUFDbEIsTUFBTSxFQUFFLEdBQUc7UUFDWCxTQUFTLEVBQUUsYUFBYTtLQUN6QjtDQUNGLE9BTUs7SUFDSixrQkFBa0IsRUFBRTtRQUNsQixNQUFNLEVBQUUsR0FBRztRQUNYLFNBQVMsRUFBRSxjQUFjO0tBQzFCO0NBQ0Y7QUF2QlQ7SUFBQTtJQTRCaUMsQ0FBQzs7Z0JBNUJqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCO2dDQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0NBQ3pCLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztnQ0FDM0IsU0FBUyxFQUFFLG9CQUFvQjtnQ0FDL0IsSUFBSSxJQUtIOzZCQUNGOzRCQUNEO2dDQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0NBQ3pCLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztnQ0FDM0IsU0FBUyxFQUFFLG1CQUFtQjtnQ0FDOUIsSUFBSSxJQUtIOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0Y7O0lBQ2dDLHlCQUFDO0NBQUEsQUE1QmxDLElBNEJrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL3BhZ2VzL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IHN1ZmZpeFVybE1hdGNoZXIgfSBmcm9tICcuL3N1ZmZpeC11cmwtbWF0Y2hlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBtYXRjaGVyOiBzdWZmaXhVcmxNYXRjaGVyLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUHJvZHVjdFBhZ2VDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFN1ZmZpeFVybE1hdGNoZXI6IHtcbiAgICAgICAgICAgIG1hcmtlcjogJ3AnLFxuICAgICAgICAgICAgcGFyYW1OYW1lOiAncHJvZHVjdENvZGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXRjaGVyOiBzdWZmaXhVcmxNYXRjaGVyLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGN4U3VmZml4VXJsTWF0Y2hlcjoge1xuICAgICAgICAgICAgbWFya2VyOiAnYycsXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdjYXRlZ29yeUNvZGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdWZmaXhSb3V0ZXNNb2R1bGUge31cbiJdfQ==