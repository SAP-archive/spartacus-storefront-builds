import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../cms-structure/page/page-layout/page-layout.component';
import { suffixUrlMatcher } from '../../cms-structure/routing/suffix-routes/suffix-url-matcher';
const ɵ0 = { cxRoute: 'product' }, ɵ1 = {
    cxSuffixUrlMatcher: {
        marker: 'p',
        paramName: 'productCode',
    },
};
let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild([
                {
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
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
    })
], ProductDetailsPageModule);
export { ProductDetailsPageModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO1dBU2xGLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQU10QjtJQUNKLGtCQUFrQixFQUFFO1FBQ2xCLE1BQU0sRUFBRSxHQUFHO1FBQ1gsU0FBUyxFQUFFLGFBQWE7S0FDekI7Q0FDRjtBQUtULElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0NBQUcsQ0FBQTtBQUEzQix3QkFBd0I7SUF2QnBDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUF3QjtpQkFDN0I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUMzQixTQUFTLEVBQUUsbUJBQW1CO29CQUM5QixJQUFJLElBS0g7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7S0FDRixDQUFDO0dBQ1csd0JBQXdCLENBQUc7U0FBM0Isd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBzdWZmaXhVcmxNYXRjaGVyIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL3N1ZmZpeC1yb3V0ZXMvc3VmZml4LXVybC1tYXRjaGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdwcm9kdWN0JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogc3VmZml4VXJsTWF0Y2hlcixcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjeFN1ZmZpeFVybE1hdGNoZXI6IHtcbiAgICAgICAgICAgIG1hcmtlcjogJ3AnLFxuICAgICAgICAgICAgcGFyYW1OYW1lOiAncHJvZHVjdENvZGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsc1BhZ2VNb2R1bGUge31cbiJdfQ==