import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
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
export { ProductListingPageModule };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBaUIsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7V0FTOUQsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FNMUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BUXBCLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtBQWNyQyxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtDQUFHLENBQUE7QUFBM0Isd0JBQXdCO0lBbkNwQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQjtvQkFDRSxJQUFJLEVBQUUsSUFBSTtvQkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7b0JBQzlCLElBQUksSUFBNEM7aUJBQ2pEO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUFzQjtpQkFDM0I7Z0JBQ0Q7b0JBQ0UscUZBQXFGO29CQUNyRixpR0FBaUc7b0JBQ2pHLElBQUksRUFBRSxJQUFJO29CQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUF5QjtpQkFDOUI7YUFDRixDQUFDO1lBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBZ0I7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUU7d0JBQ04sUUFBUSxFQUFFOzRCQUNSLFFBQVEsRUFBRSxDQUFDLDJCQUEyQixDQUFDO3lCQUN4QztxQkFDRjtpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FBRztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgUm91dGluZ0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQsIFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4JztcbmltcG9ydCB7IFBST0RVQ1RfTElTVElOR19VUkxfTUFUQ0hFUiB9IGZyb20gJy4vcHJvZHVjdC1saXN0aW5nLXVybC1tYXRjaGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3NlYXJjaCcsIGN4Um91dGU6ICdzZWFyY2gnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnYnJhbmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBUaGUgJ2NhdGVnb3J5JyByb3V0ZSAgbWF5IGluY2x1ZGUgYSBncmVlZHkgc3VmZml4IHVybCBtYXRjaGVyICcqKi9jLzpjYXRlZ29yeUNvZGUnXG4gICAgICAgIC8vIFNvIG5vdCB0byBzaGFkb3cgdGhlIHNwZWNpZmljICdicmFuZCcgcm91dGUsIHRoZSAnY2F0ZWdvcnknIGlzIHRoZSBsYXN0IHJvdXRlIGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Um91dGluZ0NvbmZpZz57XG4gICAgICByb3V0aW5nOiB7XG4gICAgICAgIHJvdXRlczoge1xuICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICBtYXRjaGVyczogW1BST0RVQ1RfTElTVElOR19VUkxfTUFUQ0hFUl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMaXN0aW5nUGFnZU1vZHVsZSB7fVxuIl19