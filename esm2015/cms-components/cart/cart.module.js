/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartModule } from '@spartacus/core';
import { PAGE_LAYOUT_HANDLER } from '../../cms-structure/page/page-layout/page-layout-handler';
import { AddToCartModule } from './add-to-cart/add-to-cart.module';
import { CartDetailsModule } from './cart-details/cart-details.module';
import { CartPageLayoutHandler } from './cart-page-layout-handler';
import { CartSharedModule } from './cart-shared/cart-shared.module';
import { CartTotalsModule } from './cart-totals/cart-totals.module';
import { MiniCartModule } from './mini-cart/mini-cart.module';
export class CartComponentModule {
}
CartComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgbModule, CartDetailsModule, CartTotalsModule, CartSharedModule],
                exports: [
                    CartDetailsModule,
                    CartTotalsModule,
                    CartSharedModule,
                    AddToCartModule,
                    MiniCartModule,
                    CartModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQW9COUQsTUFBTSxPQUFPLG1CQUFtQjs7O1lBbEIvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDO2dCQUMzRSxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixjQUFjO29CQUNkLFVBQVU7aUJBQ1g7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxtQkFBbUI7d0JBQzVCLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQ2FydE1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQQUdFX0xBWU9VVF9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuaW1wb3J0IHsgQWRkVG9DYXJ0TW9kdWxlIH0gZnJvbSAnLi9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydERldGFpbHNNb2R1bGUgfSBmcm9tICcuL2NhcnQtZGV0YWlscy9jYXJ0LWRldGFpbHMubW9kdWxlJztcbmltcG9ydCB7IENhcnRQYWdlTGF5b3V0SGFuZGxlciB9IGZyb20gJy4vY2FydC1wYWdlLWxheW91dC1oYW5kbGVyJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuL2NhcnQtc2hhcmVkL2NhcnQtc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0VG90YWxzTW9kdWxlIH0gZnJvbSAnLi9jYXJ0LXRvdGFscy9jYXJ0LXRvdGFscy5tb2R1bGUnO1xuaW1wb3J0IHsgTWluaUNhcnRNb2R1bGUgfSBmcm9tICcuL21pbmktY2FydC9taW5pLWNhcnQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05nYk1vZHVsZSwgQ2FydERldGFpbHNNb2R1bGUsIENhcnRUb3RhbHNNb2R1bGUsIENhcnRTaGFyZWRNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgQ2FydERldGFpbHNNb2R1bGUsXG4gICAgQ2FydFRvdGFsc01vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIEFkZFRvQ2FydE1vZHVsZSxcbiAgICBNaW5pQ2FydE1vZHVsZSxcbiAgICBDYXJ0TW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQQUdFX0xBWU9VVF9IQU5ETEVSLFxuICAgICAgdXNlQ2xhc3M6IENhcnRQYWdlTGF5b3V0SGFuZGxlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb21wb25lbnRNb2R1bGUge31cbiJdfQ==