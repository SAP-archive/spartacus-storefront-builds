import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsPageGuard, PageLayoutComponent } from '../../cms-structure/index';
import { suffixUrlMatcher } from '../../cms-structure/routing/suffix-routes/suffix-url-matcher';
const ɵ0 = { cxRoute: 'category' }, ɵ1 = { pageLabel: 'search', cxRoute: 'search' }, ɵ2 = { cxRoute: 'brand' }, ɵ3 = {
    cxSuffixUrlMatcher: {
        marker: 'c',
        paramName: 'categoryCode',
    },
};
let ProductListingPageModule = class ProductListingPageModule {
};
ProductListingPageModule = __decorate([
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
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ1,
                },
                {
                    path: null,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ2,
                },
                {
                    matcher: suffixUrlMatcher,
                    canActivate: [CmsPageGuard],
                    component: PageLayoutComponent,
                    data: ɵ3,
                },
            ]),
        ],
    })
], ProductListingPageModule);
export { ProductListingPageModule };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO1dBUWxGLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQU12QixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQU0xQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FNcEI7SUFDSixrQkFBa0IsRUFBRTtRQUNsQixNQUFNLEVBQUUsR0FBRztRQUNYLFNBQVMsRUFBRSxjQUFjO0tBQzFCO0NBQ0Y7QUFLVCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtDQUFHLENBQUE7QUFBM0Isd0JBQXdCO0lBbkNwQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7b0JBQzlCLElBQUksSUFBeUI7aUJBQzlCO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUE0QztpQkFDakQ7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUk7b0JBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUMzQixTQUFTLEVBQUUsbUJBQW1CO29CQUM5QixJQUFJLElBQXNCO2lCQUMzQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7b0JBQzlCLElBQUksSUFLSDtpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FBRztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCwgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuaW1wb3J0IHsgc3VmZml4VXJsTWF0Y2hlciB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcm91dGluZy9zdWZmaXgtcm91dGVzL3N1ZmZpeC11cmwtbWF0Y2hlcic7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnc2VhcmNoJywgY3hSb3V0ZTogJ3NlYXJjaCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdicmFuZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1hdGNoZXI6IHN1ZmZpeFVybE1hdGNoZXIsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY3hTdWZmaXhVcmxNYXRjaGVyOiB7XG4gICAgICAgICAgICBtYXJrZXI6ICdjJyxcbiAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhdGVnb3J5Q29kZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSB7fVxuIl19