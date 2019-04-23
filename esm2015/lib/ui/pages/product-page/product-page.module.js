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
const ɵ0 = { cxPath: 'product' };
/** @type {?} */
const routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: ProductPageComponent,
        data: ɵ0,
    },
];
export class ProductPageModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztXQU9oRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7O01BTHpCLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQzNCLFNBQVMsRUFBRSxvQkFBb0I7UUFDL0IsSUFBSSxJQUF1QjtLQUM1QjtDQUNGO0FBWUQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBVjdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDN0Isb0JBQW9CO29CQUNwQixnQkFBZ0I7aUJBQ2pCO2dCQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLm1vZHVsZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogbnVsbCxcbiAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7IGN4UGF0aDogJ3Byb2R1Y3QnIH0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICAgIFByb2R1Y3REZXRhaWxzTW9kdWxlLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RQYWdlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Byb2R1Y3RQYWdlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFBhZ2VNb2R1bGUge31cbiJdfQ==