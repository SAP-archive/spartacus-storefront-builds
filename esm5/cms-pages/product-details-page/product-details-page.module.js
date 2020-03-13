import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideDefaultConfig } from '@spartacus/core';
import { CmsPageGuard } from '../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../cms-structure/page/page-layout/page-layout.component';
import { PRODUCT_DETAILS_URL_MATCHER } from './product-details-url-matcher';
var ɵ0 = { cxRoute: 'product' };
var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
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
    return ProductDetailsPageModule;
}());
export { ProductDetailsPageModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXBhZ2VzL3Byb2R1Y3QtZGV0YWlscy1wYWdlL3Byb2R1Y3QtZGV0YWlscy1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFpQixNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztTQVM5RCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFnQnBDO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix3QkFBd0I7UUF2QnBDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQjt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLElBQUksSUFBd0I7cUJBQzdCO2lCQUNGLENBQUM7YUFDSDtZQUNELFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBZ0I7b0JBQ2xDLE9BQU8sRUFBRTt3QkFDUCxNQUFNLEVBQUU7NEJBQ04sT0FBTyxFQUFFO2dDQUNQLFFBQVEsRUFBRSxDQUFDLDJCQUEyQixDQUFDOzZCQUN4Qzt5QkFDRjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7U0FDRixDQUFDO09BQ1csd0JBQXdCLENBQUc7SUFBRCwrQkFBQztDQUFBLEFBQXhDLElBQXdDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcsIFJvdXRpbmdDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUFJPRFVDVF9ERVRBSUxTX1VSTF9NQVRDSEVSIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtdXJsLW1hdGNoZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2VMYXlvdXRDb21wb25lbnQsXG4gICAgICAgIGRhdGE6IHsgY3hSb3V0ZTogJ3Byb2R1Y3QnIH0sXG4gICAgICB9LFxuICAgIF0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Um91dGluZ0NvbmZpZz57XG4gICAgICByb3V0aW5nOiB7XG4gICAgICAgIHJvdXRlczoge1xuICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgIG1hdGNoZXJzOiBbUFJPRFVDVF9ERVRBSUxTX1VSTF9NQVRDSEVSXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdERldGFpbHNQYWdlTW9kdWxlIHt9XG4iXX0=