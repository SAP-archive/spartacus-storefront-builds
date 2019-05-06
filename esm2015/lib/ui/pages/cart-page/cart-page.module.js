/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDetailsModule } from '../../../../cms-components/checkout/cart/cart-details/cart-details.module';
import { OutletRefModule } from '../../../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { PageLayoutModule } from '../../../../cms-structure/page/index';
import { CmsModule } from '../../../cms/cms.module';
import { CmsPageGuard } from '../../../cms/guards/cms-page.guard';
import { CartPageComponent } from './cart-page.component';
const ɵ0 = { pageLabel: 'cartPage', cxPath: 'cart' };
/** @type {?} */
const routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: CartPageComponent,
        data: ɵ0,
    },
];
export class CartPageModule {
}
CartPageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule.forChild(routes),
                    PageLayoutModule,
                    CartDetailsModule,
                    OutletRefModule,
                    CmsModule,
                ],
                declarations: [CartPageComponent],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO1dBT2hELEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFOztNQUw3QyxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUMzQixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLElBQUksSUFBMkM7S0FDaEQ7Q0FDRjtBQWFELE1BQU0sT0FBTyxjQUFjOzs7WUFYMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUM3QixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixTQUFTO2lCQUNWO2dCQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXJ0RGV0YWlsc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5tb2R1bGUnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LXJlZi9vdXRsZXQtcmVmLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IENtc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jbXMubW9kdWxlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2Ntcy9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NhcnQtcGFnZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6IG51bGwsXG4gICAgY2FuQWN0aXZhdGU6IFtDbXNQYWdlR3VhcmRdLFxuICAgIGNvbXBvbmVudDogQ2FydFBhZ2VDb21wb25lbnQsXG4gICAgZGF0YTogeyBwYWdlTGFiZWw6ICdjYXJ0UGFnZScsIGN4UGF0aDogJ2NhcnQnIH0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgQ2FydERldGFpbHNNb2R1bGUsXG4gICAgT3V0bGV0UmVmTW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FydFBhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZU1vZHVsZSB7fVxuIl19