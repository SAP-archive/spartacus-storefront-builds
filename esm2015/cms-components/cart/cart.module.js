/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartModule } from '@spartacus/core';
import { AddToCartModule } from './add-to-cart/add-to-cart.module';
import { CartDetailsModule } from './cart-details/cart-details.module';
import { CartSharedModule } from './cart-shared/cart-shared.module';
import { CartTotalsModule } from './cart-totals/cart-totals.module';
import { MiniCartModule } from './mini-cart/mini-cart.module';
import { PAGE_LAYOUT_HANDLER } from '../../cms-structure/page/page-layout/page-layout-handler';
import { CartPageLayoutHandler } from './cart-page-layout-handler';
export class CartComponentModule {
}
CartComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CartModule,
                    NgbModule,
                    CartDetailsModule,
                    CartTotalsModule,
                    CartSharedModule,
                ],
                exports: [
                    CartDetailsModule,
                    CartTotalsModule,
                    CartSharedModule,
                    AddToCartModule,
                    MiniCartModule,
                ],
                providers: [
                    {
                        provide: PAGE_LAYOUT_HANDLER,
                        useClass: CartPageLayoutHandler,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQXlCbkUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBdkIvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFVBQVU7b0JBQ1YsU0FBUztvQkFDVCxpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixjQUFjO2lCQUNmO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsbUJBQW1CO3dCQUM1QixRQUFRLEVBQUUscUJBQXFCO3dCQUMvQixLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IENhcnRNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWRkVG9DYXJ0TW9kdWxlIH0gZnJvbSAnLi9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydERldGFpbHNNb2R1bGUgfSBmcm9tICcuL2NhcnQtZGV0YWlscy9jYXJ0LWRldGFpbHMubW9kdWxlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuL2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0VG90YWxzTW9kdWxlIH0gZnJvbSAnLi9jYXJ0LXRvdGFscy9jYXJ0LXRvdGFscy5tb2R1bGUnO1xuaW1wb3J0IHsgTWluaUNhcnRNb2R1bGUgfSBmcm9tICcuL21pbmktY2FydC9taW5pLWNhcnQubW9kdWxlJztcbmltcG9ydCB7IFBBR0VfTEFZT1VUX0hBTkRMRVIgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5pbXBvcnQgeyBDYXJ0UGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuL2NhcnQtcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYXJ0TW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBDYXJ0RGV0YWlsc01vZHVsZSxcbiAgICBDYXJ0VG90YWxzTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYXJ0RGV0YWlsc01vZHVsZSxcbiAgICBDYXJ0VG90YWxzTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQWRkVG9DYXJ0TW9kdWxlLFxuICAgIE1pbmlDYXJ0TW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQQUdFX0xBWU9VVF9IQU5ETEVSLFxuICAgICAgdXNlQ2xhc3M6IENhcnRQYWdlTGF5b3V0SGFuZGxlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb21wb25lbnRNb2R1bGUge31cbiJdfQ==