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
var ɵ0 = { cxPath: 'product' };
/** @type {?} */
var routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: ProductPageComponent,
        data: ɵ0,
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9wcm9kdWN0LXBhZ2UvcHJvZHVjdC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztTQU90RCxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7O0lBTHpCLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxJQUFJO1FBQ1YsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQzNCLFNBQVMsRUFBRSxvQkFBb0I7UUFDL0IsSUFBSSxJQUF1QjtLQUM1QjtDQUNGO0FBRUQ7SUFBQTtJQVVnQyxDQUFDOztnQkFWaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUM3QixvQkFBb0I7d0JBQ3BCLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQzs7SUFDK0Isd0JBQUM7Q0FBQSxBQVZqQyxJQVVpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxzTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUHJvZHVjdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IG51bGwsXG4gICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdFBhZ2VDb21wb25lbnQsXG4gICAgZGF0YTogeyBjeFBhdGg6ICdwcm9kdWN0JyB9LFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcbiAgICBQcm9kdWN0RGV0YWlsc01vZHVsZSxcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQcm9kdWN0UGFnZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9kdWN0UGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlTW9kdWxlIHt9XG4iXX0=