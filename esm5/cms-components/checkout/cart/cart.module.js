/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartModule } from '@spartacus/core';
import { AddToCartModule } from './add-to-cart/add-to-cart.module';
import { CartDetailsModule } from './cart-details/cart-details.module';
import { CartSharedModule } from './cart-shared/cart-shared.module';
import { CartTotalsModule } from './cart-totals/cart-totals.module';
import { MiniCartModule } from './mini-cart/mini-cart.module';
var CartComponentModule = /** @class */ (function () {
    function CartComponentModule() {
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
                },] }
    ];
    return CartComponentModule;
}());
export { CartComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jYXJ0L2NhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU5RDtJQUFBO0lBZ0JrQyxDQUFDOztnQkFoQmxDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsVUFBVTt3QkFDVixTQUFTO3dCQUNULGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGNBQWM7cUJBQ2Y7aUJBQ0Y7O0lBQ2lDLDBCQUFDO0NBQUEsQUFoQm5DLElBZ0JtQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQ2FydE1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBZGRUb0NhcnRNb2R1bGUgfSBmcm9tICcuL2FkZC10by1jYXJ0L2FkZC10by1jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0RGV0YWlsc01vZHVsZSB9IGZyb20gJy4vY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENhcnRUb3RhbHNNb2R1bGUgfSBmcm9tICcuL2NhcnQtdG90YWxzL2NhcnQtdG90YWxzLm1vZHVsZSc7XG5pbXBvcnQgeyBNaW5pQ2FydE1vZHVsZSB9IGZyb20gJy4vbWluaS1jYXJ0L21pbmktY2FydC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FydE1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgQ2FydERldGFpbHNNb2R1bGUsXG4gICAgQ2FydFRvdGFsc01vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2FydERldGFpbHNNb2R1bGUsXG4gICAgQ2FydFRvdGFsc01vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIEFkZFRvQ2FydE1vZHVsZSxcbiAgICBNaW5pQ2FydE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydENvbXBvbmVudE1vZHVsZSB7fVxuIl19