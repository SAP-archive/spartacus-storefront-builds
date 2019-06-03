/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const ɵ0 = { cxRoute: 'product' }, ɵ1 = {
    cxSuffixUrlMatcher: {
        marker: 'p',
        paramName: 'productCode',
    },
};
/** @type {?} */
const routes = [
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
export class ProductDetailsPageModule {
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
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDaEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7V0FPckUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BTXRCO0lBQ0osa0JBQWtCLEVBQUU7UUFDbEIsTUFBTSxFQUFFLEdBQUc7UUFDWCxTQUFTLEVBQUUsYUFBYTtLQUN6QjtDQUNGOztNQWhCQyxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUMzQixTQUFTLEVBQUUsMkJBQTJCO1FBQ3RDLElBQUksSUFBd0I7S0FDN0I7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQzNCLFNBQVMsRUFBRSwyQkFBMkI7UUFDdEMsSUFBSSxJQUtIO0tBQ0Y7Q0FDRjtBQWFELE1BQU0sT0FBTyx3QkFBd0I7OztZQVhwQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQzdCLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixlQUFlO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWRldGFpbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LXJlZi9vdXRsZXQtcmVmLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBzdWZmaXhVcmxNYXRjaGVyIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL3N1ZmZpeC1yb3V0ZXMvc3VmZml4LXVybC1tYXRjaGVyJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBudWxsLFxuICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICBjb21wb25lbnQ6IFByb2R1Y3REZXRhaWxzUGFnZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7IGN4Um91dGU6ICdwcm9kdWN0JyB9LFxuICB9LFxuICB7XG4gICAgbWF0Y2hlcjogc3VmZml4VXJsTWF0Y2hlcixcbiAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgY29tcG9uZW50OiBQcm9kdWN0RGV0YWlsc1BhZ2VDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgY3hTdWZmaXhVcmxNYXRjaGVyOiB7XG4gICAgICAgIG1hcmtlcjogJ3AnLFxuICAgICAgICBwYXJhbU5hbWU6ICdwcm9kdWN0Q29kZScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICAgIFByb2R1Y3REZXRhaWxzTW9kdWxlLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgT3V0bGV0UmVmTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0RGV0YWlsc1BhZ2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJvZHVjdERldGFpbHNQYWdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlIHt9XG4iXX0=