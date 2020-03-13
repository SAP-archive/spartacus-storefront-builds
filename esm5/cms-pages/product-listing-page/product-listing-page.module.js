import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideDefaultConfig } from '@spartacus/core';
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
            ],
            providers: [
                provideDefaultConfig({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFpQixNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztTQVM5RCxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQU0xQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FRcEIsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFO0FBZ0JyQztJQUFBO0lBQXVDLENBQUM7SUFBM0Isd0JBQXdCO1FBckNwQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEI7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO3dCQUMzQixTQUFTLEVBQUUsbUJBQW1CO3dCQUM5QixJQUFJLElBQTRDO3FCQUNqRDtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLElBQUksSUFBc0I7cUJBQzNCO29CQUNEO3dCQUNFLHFGQUFxRjt3QkFDckYsaUdBQWlHO3dCQUNqRyxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLElBQUksSUFBeUI7cUJBQzlCO2lCQUNGLENBQUM7YUFDSDtZQUNELFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBZ0I7b0JBQ2xDLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUU7NEJBQ04sUUFBUSxFQUFFO2dDQUNSLFFBQVEsRUFBRSxDQUFDLDJCQUEyQixDQUFDOzZCQUN4Qzt5QkFDRjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7U0FDRixDQUFDO09BQ1csd0JBQXdCLENBQUc7SUFBRCwrQkFBQztDQUFBLEFBQXhDLElBQXdDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcsIFJvdXRpbmdDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkLCBQYWdlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9pbmRleCc7XG5pbXBvcnQgeyBQUk9EVUNUX0xJU1RJTkdfVVJMX01BVENIRVIgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdGluZy11cmwtbWF0Y2hlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBwYWdlTGFiZWw6ICdzZWFyY2gnLCBjeFJvdXRlOiAnc2VhcmNoJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2JyYW5kJyB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gVGhlICdjYXRlZ29yeScgcm91dGUgIG1heSBpbmNsdWRlIGEgZ3JlZWR5IHN1ZmZpeCB1cmwgbWF0Y2hlciAnKiovYy86Y2F0ZWdvcnlDb2RlJ1xuICAgICAgICAvLyBTbyBub3QgdG8gc2hhZG93IHRoZSBzcGVjaWZpYyAnYnJhbmQnIHJvdXRlLCB0aGUgJ2NhdGVnb3J5JyBpcyB0aGUgbGFzdCByb3V0ZSBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdjYXRlZ29yeScgfSxcbiAgICAgIH0sXG4gICAgXSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxSb3V0aW5nQ29uZmlnPntcbiAgICAgIHJvdXRpbmc6IHtcbiAgICAgICAgcm91dGVzOiB7XG4gICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIG1hdGNoZXJzOiBbUFJPRFVDVF9MSVNUSU5HX1VSTF9NQVRDSEVSXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RpbmdQYWdlTW9kdWxlIHt9XG4iXX0=