/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '../../../cms/guards/cms-page.guard';
import { ProductPageComponent } from './product-page.component';
import { PageLayoutModule } from '../../../cms/page-layout/page-layout.module';
import { ProductDetailsModule } from '../../../product/components/product-details/product-details.module';
var ɵ0 = { cxPath: 'product' }, ɵ1 = { cxRedirectTo: 'product' };
/** @type {?} */
var routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: ProductPageComponent,
        data: ɵ0,
    },
    {
        path: 'Open-Catalogue/:category1/:category2/:category3/:category4/p/:productCode',
        redirectTo: null,
        data: ɵ1,
    },
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule.forChild(routes),
                        ProductDetailsModule,
                        PageLayoutModule,
                    ],
                    declarations: [ProductPageComponent],
                    exports: [ProductPageComponent],
                },] }
    ];
    return ProductPageModule;
}());
export { ProductPageModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztTQU9oRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FNckIsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFOztJQVgvQixNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUMzQixTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLElBQUksSUFBdUI7S0FDNUI7SUFDRDtRQUNFLElBQUksRUFDRiwyRUFBMkU7UUFDN0UsVUFBVSxFQUFFLElBQUk7UUFDaEIsSUFBSSxJQUE2QjtLQUNsQztDQUNGO0FBRUQ7SUFBQTtJQVVnQyxDQUFDOztnQkFWaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUM3QixvQkFBb0I7d0JBQ3BCLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQzs7SUFDK0Isd0JBQUM7Q0FBQSxBQVZqQyxJQVVpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUHJvZHVjdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5tb2R1bGUnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IG51bGwsXG4gICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdFBhZ2VDb21wb25lbnQsXG4gICAgZGF0YTogeyBjeFBhdGg6ICdwcm9kdWN0JyB9LFxuICB9LFxuICB7XG4gICAgcGF0aDpcbiAgICAgICdPcGVuLUNhdGFsb2d1ZS86Y2F0ZWdvcnkxLzpjYXRlZ29yeTIvOmNhdGVnb3J5My86Y2F0ZWdvcnk0L3AvOnByb2R1Y3RDb2RlJyxcbiAgICByZWRpcmVjdFRvOiBudWxsLFxuICAgIGRhdGE6IHsgY3hSZWRpcmVjdFRvOiAncHJvZHVjdCcgfSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gICAgUHJvZHVjdERldGFpbHNNb2R1bGUsXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZHVjdFBhZ2VDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJvZHVjdFBhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UGFnZU1vZHVsZSB7fVxuIl19