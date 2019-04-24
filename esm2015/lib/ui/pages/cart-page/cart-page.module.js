/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDetailsModule } from '../../../../cms-components/checkout/cart/cart-details/cart-details.module';
import { CmsModule } from '../../../cms/cms.module';
import { CmsPageGuard } from '../../../cms/guards/cms-page.guard';
import { PageLayoutModule } from '../../../cms/page-layout/page-layout.module';
import { OutletRefModule } from '../../../outlet/outlet-ref/outlet-ref.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO1dBT2hELEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFOztNQUw3QyxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUMzQixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLElBQUksSUFBMkM7S0FDaEQ7Q0FDRjtBQWFELE1BQU0sT0FBTyxjQUFjOzs7WUFYMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUM3QixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsZUFBZTtvQkFDZixTQUFTO2lCQUNWO2dCQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXJ0RGV0YWlsc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Ntcy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vY21zL2d1YXJkcy9jbXMtcGFnZS5ndWFyZCc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9vdXRsZXQvb3V0bGV0LXJlZi9vdXRsZXQtcmVmLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY2FydC1wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogbnVsbCxcbiAgICBjYW5BY3RpdmF0ZTogW0Ntc1BhZ2VHdWFyZF0sXG4gICAgY29tcG9uZW50OiBDYXJ0UGFnZUNvbXBvbmVudCxcbiAgICBkYXRhOiB7IHBhZ2VMYWJlbDogJ2NhcnRQYWdlJywgY3hQYXRoOiAnY2FydCcgfSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gICAgUGFnZUxheW91dE1vZHVsZSxcbiAgICBDYXJ0RGV0YWlsc01vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXJ0UGFnZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTW9kdWxlIHt9XG4iXX0=