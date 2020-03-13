import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideDefaultConfig } from '@spartacus/core';
import { CmsPageGuard } from '../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../cms-structure/page/page-layout/page-layout.component';
import { PRODUCT_DETAILS_URL_MATCHER } from './product-details-url-matcher';
const ɵ0 = { cxRoute: 'product' };
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
            ]),
        ],
        providers: [
            provideDefaultConfig({
                routing: {
                    routes: {
                        product: {
                            matchers: [PRODUCT_DETAILS_URL_MATCHER],
                        },
                    },
                },
            }),
        ],
    })
], ProductDetailsPageModule);
export { ProductDetailsPageModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFpQixNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztXQVM5RCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFnQnBDLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0NBQUcsQ0FBQTtBQUEzQix3QkFBd0I7SUF2QnBDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCO29CQUNFLElBQUksRUFBRSxJQUFJO29CQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjtvQkFDOUIsSUFBSSxJQUF3QjtpQkFDN0I7YUFDRixDQUFDO1NBQ0g7UUFDRCxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBZ0I7Z0JBQ2xDLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUU7d0JBQ04sT0FBTyxFQUFFOzRCQUNQLFFBQVEsRUFBRSxDQUFDLDJCQUEyQixDQUFDO3lCQUN4QztxQkFDRjtpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FBRztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnLCBSb3V0aW5nQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvZ3VhcmRzL2Ntcy1wYWdlLmd1YXJkJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBST0RVQ1RfREVUQUlMU19VUkxfTUFUQ0hFUiB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLXVybC1tYXRjaGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICAgICAgY29tcG9uZW50OiBQYWdlTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBkYXRhOiB7IGN4Um91dGU6ICdwcm9kdWN0JyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPFJvdXRpbmdDb25maWc+e1xuICAgICAgcm91dGluZzoge1xuICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICBtYXRjaGVyczogW1BST0RVQ1RfREVUQUlMU19VUkxfTUFUQ0hFUl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxzUGFnZU1vZHVsZSB7fVxuIl19