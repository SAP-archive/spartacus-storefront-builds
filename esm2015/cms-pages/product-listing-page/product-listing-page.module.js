import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideDefaultConfig } from '@spartacus/core';
import { CmsPageGuard, PageLayoutComponent } from '../../cms-structure/index';
import { PRODUCT_LISTING_URL_MATCHER } from './product-listing-url-matcher';
const ɵ0 = { pageLabel: 'search', cxRoute: 'search' }, ɵ1 = { cxRoute: 'brand' }, ɵ2 = { cxRoute: 'category' };
export class ProductListingPageModule {
}
ProductListingPageModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0aW5nLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXBhZ2VzL3Byb2R1Y3QtbGlzdGluZy1wYWdlL3Byb2R1Y3QtbGlzdGluZy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQWlCLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO1dBUzlELEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BTTFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQVFwQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7QUFnQnJDLE1BQU0sT0FBTyx3QkFBd0I7OztZQXJDcEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZLENBQUMsUUFBUSxDQUFDO3dCQUNwQjs0QkFDRSxJQUFJLEVBQUUsSUFBSTs0QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLElBQUksSUFBNEM7eUJBQ2pEO3dCQUNEOzRCQUNFLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQzs0QkFDM0IsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsSUFBSSxJQUFzQjt5QkFDM0I7d0JBQ0Q7NEJBQ0UscUZBQXFGOzRCQUNyRixpR0FBaUc7NEJBQ2pHLElBQUksRUFBRSxJQUFJOzRCQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQzs0QkFDM0IsU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsSUFBSSxJQUF5Qjt5QkFDOUI7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQWdCO3dCQUNsQyxPQUFPLEVBQUU7NEJBQ1AsTUFBTSxFQUFFO2dDQUNOLFFBQVEsRUFBRTtvQ0FDUixRQUFRLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQ0FDeEM7NkJBQ0Y7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZywgUm91dGluZ0NvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNQYWdlR3VhcmQsIFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4JztcbmltcG9ydCB7IFBST0RVQ1RfTElTVElOR19VUkxfTUFUQ0hFUiB9IGZyb20gJy4vcHJvZHVjdC1saXN0aW5nLXVybC1tYXRjaGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ3NlYXJjaCcsIGN4Um91dGU6ICdzZWFyY2gnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnYnJhbmQnIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBUaGUgJ2NhdGVnb3J5JyByb3V0ZSAgbWF5IGluY2x1ZGUgYSBncmVlZHkgc3VmZml4IHVybCBtYXRjaGVyICcqKi9jLzpjYXRlZ29yeUNvZGUnXG4gICAgICAgIC8vIFNvIG5vdCB0byBzaGFkb3cgdGhlIHNwZWNpZmljICdicmFuZCcgcm91dGUsIHRoZSAnY2F0ZWdvcnknIGlzIHRoZSBsYXN0IHJvdXRlIGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2NhdGVnb3J5JyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPFJvdXRpbmdDb25maWc+e1xuICAgICAgcm91dGluZzoge1xuICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgbWF0Y2hlcnM6IFtQUk9EVUNUX0xJU1RJTkdfVVJMX01BVENIRVJdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdGluZ1BhZ2VNb2R1bGUge31cbiJdfQ==