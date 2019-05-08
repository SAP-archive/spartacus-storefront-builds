/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsModule } from '../../../../cms-components/product/index';
import { PageLayoutModule } from '../../../../cms-structure/page/index';
import { CmsPageGuard } from '../../../cms/guards/cms-page.guard';
import { ProductPageComponent } from './product-page.component';
const ɵ0 = { cxRoute: 'product' };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztXQU90RCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7O01BTDFCLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQzNCLFNBQVMsRUFBRSxvQkFBb0I7UUFDL0IsSUFBSSxJQUF3QjtLQUM3QjtDQUNGO0FBWUQsTUFBTSxPQUFPLGlCQUFpQjs7O1lBVjdCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDN0Isb0JBQW9CO29CQUNwQixnQkFBZ0I7aUJBQ2pCO2dCQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbHNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9wcm9kdWN0L2luZGV4JztcbmltcG9ydCB7IFBhZ2VMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogbnVsbCxcbiAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgY29tcG9uZW50OiBQcm9kdWN0UGFnZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7IGN4Um91dGU6ICdwcm9kdWN0JyB9LFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICBQcm9kdWN0RGV0YWlsc01vZHVsZSxcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0UGFnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0UGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlTW9kdWxlIHt9XG4iXX0=