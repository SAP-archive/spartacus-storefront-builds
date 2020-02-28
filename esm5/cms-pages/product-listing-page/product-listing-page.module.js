import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
import { CmsPageGuard, PageLayoutComponent } from '../../cms-structure/index';
import { PRODUCT_LISTING_URL_MATCHER } from './product-listing-url-matcher';
var ɵ0 = { pageLabel: 'search', cxRoute: 'search' }, ɵ1 = { cxRoute: 'brand' }, ɵ2 = { cxRoute: 'category' };
var ProductListingPageModule = /** @class */ (function () {
    function ProductListingPageModule() {
    }
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
                        // The 'category' route  may include a greedy suffix url matcher '**/c/:categoryCode'
                        // So not to shadow the specific 'brand' route, the 'category' is the last route in the sequence.
                        path: null,
                        canActivate: [CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ2,
                    },
                ]),
                ConfigModule.withConfig({
                    routing: {
                        routes: {
                            category: {
                                matchers: [PRODUCT_LISTING_URL_MATCHER],
                            },
                        },
                    },
                }),
            ],
        })
    ], ProductListingPageModule);
    return ProductListingPageModule;
}());
export { ProductListingPageModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBaUIsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7U0FTOUQsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FNMUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BUXBCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtBQWNyQztJQUFBO0lBQXVDLENBQUM7SUFBM0Isd0JBQXdCO1FBbkNwQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEI7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUMzQixTQUFTLEVBQUUsbUJBQW1CO3dCQUM5QixJQUFJLElBQTRDO3FCQUNqRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLElBQUksSUFBc0I7cUJBQzNCO29CQUNEO3dCQUNFLHFGQUFxRjt3QkFDckYsaUdBQWlHO3dCQUNqRyxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLElBQUksSUFBeUI7cUJBQzlCO2lCQUNGLENBQUM7Z0JBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBZ0I7b0JBQ3JDLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUU7NEJBQ04sUUFBUSxFQUFFO2dDQUNSLFFBQVEsRUFBRSxDQUFDLDJCQUEyQixDQUFDOzZCQUN4Qzt5QkFDRjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7U0FDRixDQUFDO09BQ1csd0JBQXdCLENBQUc7SUFBRCwrQkFBQztDQUFBLEFBQXhDLElBQXdDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCwgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuaW1wb3J0IHsgUFJPRFVDVF9MSVNUSU5HX1VSTF9NQVRDSEVSIH0gZnJvbSAnLi9wcm9kdWN0LWxpc3RpbmctdXJsLW1hdGNoZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnc2VhcmNoJywgY3hSb3V0ZTogJ3NlYXJjaCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdicmFuZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFRoZSAnY2F0ZWdvcnknIHJvdXRlICBtYXkgaW5jbHVkZSBhIGdyZWVkeSBzdWZmaXggdXJsIG1hdGNoZXIgJyoqL2MvOmNhdGVnb3J5Q29kZSdcbiAgICAgICAgLy8gU28gbm90IHRvIHNoYWRvdyB0aGUgc3BlY2lmaWMgJ2JyYW5kJyByb3V0ZSwgdGhlICdjYXRlZ29yeScgaXMgdGhlIGxhc3Qgcm91dGUgaW4gdGhlIHNlcXVlbmNlLlxuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnY2F0ZWdvcnknIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxSb3V0aW5nQ29uZmlnPntcbiAgICAgIHJvdXRpbmc6IHtcbiAgICAgICAgcm91dGVzOiB7XG4gICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIG1hdGNoZXJzOiBbUFJPRFVDVF9MSVNUSU5HX1VSTF9NQVRDSEVSXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlIHt9XG4iXX0=