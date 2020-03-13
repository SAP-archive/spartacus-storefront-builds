import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideDefaultConfig } from '@spartacus/core';
import { CmsPageGuard, PageLayoutComponent } from '../../cms-structure/index';
import { PRODUCT_LISTING_URL_MATCHER } from './product-listing-url-matcher';
const ɵ0 = { pageLabel: 'search', cxRoute: 'search' }, ɵ1 = { cxRoute: 'brand' }, ɵ2 = { cxRoute: 'category' };
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
export { ProductListingPageModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFpQixNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztXQVM5RCxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQU0xQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FRcEIsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFO0FBZ0JyQyxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtDQUFHLENBQUE7QUFBM0Isd0JBQXdCO0lBckNwQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7b0JBQzlCLElBQUksSUFBNEM7aUJBQ2pEO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUFzQjtpQkFDM0I7Z0JBQ0Q7b0JBQ0UscUZBQXFGO29CQUNyRixpR0FBaUc7b0JBQ2pHLElBQUksRUFBRSxJQUFJO29CQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUF5QjtpQkFDOUI7YUFDRixDQUFDO1NBQ0g7UUFDRCxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBZ0I7Z0JBQ2xDLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUU7d0JBQ04sUUFBUSxFQUFFOzRCQUNSLFFBQVEsRUFBRSxDQUFDLDJCQUEyQixDQUFDO3lCQUN4QztxQkFDRjtpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FBRztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnLCBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCwgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuaW1wb3J0IHsgUFJPRFVDVF9MSVNUSU5HX1VSTF9NQVRDSEVSIH0gZnJvbSAnLi9wcm9kdWN0LWxpc3RpbmctdXJsLW1hdGNoZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgcGFnZUxhYmVsOiAnc2VhcmNoJywgY3hSb3V0ZTogJ3NlYXJjaCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdicmFuZCcgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFRoZSAnY2F0ZWdvcnknIHJvdXRlICBtYXkgaW5jbHVkZSBhIGdyZWVkeSBzdWZmaXggdXJsIG1hdGNoZXIgJyoqL2MvOmNhdGVnb3J5Q29kZSdcbiAgICAgICAgLy8gU28gbm90IHRvIHNoYWRvdyB0aGUgc3BlY2lmaWMgJ2JyYW5kJyByb3V0ZSwgdGhlICdjYXRlZ29yeScgaXMgdGhlIGxhc3Qgcm91dGUgaW4gdGhlIHNlcXVlbmNlLlxuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnY2F0ZWdvcnknIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Um91dGluZ0NvbmZpZz57XG4gICAgICByb3V0aW5nOiB7XG4gICAgICAgIHJvdXRlczoge1xuICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICBtYXRjaGVyczogW1BST0RVQ1RfTElTVElOR19VUkxfTUFUQ0hFUl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSB7fVxuIl19