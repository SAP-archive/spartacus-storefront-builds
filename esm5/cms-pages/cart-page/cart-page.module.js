/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDetailsModule } from '../../cms-components/cart/cart-details/cart-details.module';
import { CmsModule, CmsPageGuard } from '../../cms-structure/index';
import { OutletRefModule } from '../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { PageLayoutModule } from '../../cms-structure/page/index';
import { CartPageComponent } from './cart-page.component';
var ɵ0 = { cxRoute: 'cart' };
/** @type {?} */
var routes = [
    {
        path: null,
        canActivate: [CmsPageGuard],
        component: CartPageComponent,
        data: ɵ0,
    },
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
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
    return CartPageModule;
}());
export { CartPageModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO1NBT2hELEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTs7SUFMdkIsTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDM0IsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QixJQUFJLElBQXFCO0tBQzFCO0NBQ0Y7QUFFRDtJQUFBO0lBVzZCLENBQUM7O2dCQVg3QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQzdCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLFNBQVM7cUJBQ1Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQ2xDOztJQUM0QixxQkFBQztDQUFBLEFBWDlCLElBVzhCO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhcnREZXRhaWxzTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LWRldGFpbHMvY2FydC1kZXRhaWxzLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNNb2R1bGUsIENtc1BhZ2VHdWFyZCB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LXJlZi9vdXRsZXQtcmVmLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL2luZGV4JztcbmltcG9ydCB7IENhcnRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJ0LXBhZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiBudWxsLFxuICAgIGNhbkFjdGl2YXRlOiBbQ21zUGFnZUd1YXJkXSxcbiAgICBjb21wb25lbnQ6IENhcnRQYWdlQ29tcG9uZW50LFxuICAgIGRhdGE6IHsgY3hSb3V0ZTogJ2NhcnQnIH0sXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgQ2FydERldGFpbHNNb2R1bGUsXG4gICAgT3V0bGV0UmVmTW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FydFBhZ2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZU1vZHVsZSB7fVxuIl19