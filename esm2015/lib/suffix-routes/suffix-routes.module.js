/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '../cms/guards/cms-page.guard';
import { PageLayoutComponent } from '../cms/page-layout/page-layout.component';
import { suffixUrlMatcher } from './suffix-url-matcher';
import { ProductPageComponent } from '../ui/pages/product-page/product-page.component';
const ɵ0 = {
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
export class SuffixRoutesModule {
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
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VmZml4LXJvdXRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3VmZml4LXJvdXRlcy9zdWZmaXgtcm91dGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO1dBU3pFO0lBQ0osa0JBQWtCLEVBQUU7UUFDbEIsTUFBTSxFQUFFLEdBQUc7UUFDWCxTQUFTLEVBQUUsYUFBYTtLQUN6QjtDQUNGLE9BTUs7SUFDSixrQkFBa0IsRUFBRTtRQUNsQixNQUFNLEVBQUUsR0FBRztRQUNYLFNBQVMsRUFBRSxjQUFjO0tBQzFCO0NBQ0Y7QUFLVCxNQUFNLE9BQU8sa0JBQWtCOzs7WUE1QjlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWSxDQUFDLFFBQVEsQ0FBQzt3QkFDcEI7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDOzRCQUMzQixTQUFTLEVBQUUsb0JBQW9COzRCQUMvQixJQUFJLElBS0g7eUJBQ0Y7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDOzRCQUMzQixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixJQUFJLElBS0g7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQgfSBmcm9tICcuLi9jbXMvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi9jbXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IHN1ZmZpeFVybE1hdGNoZXIgfSBmcm9tICcuL3N1ZmZpeC11cmwtbWF0Y2hlcic7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4uL3VpL3BhZ2VzL3Byb2R1Y3QtcGFnZS9wcm9kdWN0LXBhZ2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIG1hdGNoZXI6IHN1ZmZpeFVybE1hdGNoZXIsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZUNvbXBvbmVudCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGN4U3VmZml4VXJsTWF0Y2hlcjoge1xuICAgICAgICAgICAgbWFya2VyOiAncCcsXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdwcm9kdWN0Q29kZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1hdGNoZXI6IHN1ZmZpeFVybE1hdGNoZXIsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hTdWZmaXhVcmxNYXRjaGVyOiB7XG4gICAgICAgICAgICBtYXJrZXI6ICdjJyxcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhdGVnb3J5Q29kZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN1ZmZpeFJvdXRlc01vZHVsZSB7fVxuIl19