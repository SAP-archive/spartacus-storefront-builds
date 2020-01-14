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
import { AddToWishListModule } from './add-to-wishlist/add-to-wish-list.module';
import { SaveForLaterModule } from './save-for-later/save-for-later.module';
export class CartComponentModule {
}
CartComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgbModule,
                    CartDetailsModule,
                    CartTotalsModule,
                    CartSharedModule,
                    SaveForLaterModule,
                ],
                exports: [
                    AddToWishListModule,
                    CartDetailsModule,
                    CartTotalsModule,
                    CartSharedModule,
                    AddToCartModule,
                    MiniCartModule,
                    CartModule,
                    SaveForLaterModule,
                ],
                declarations: [],
                providers: [
                    {
                        provide: PAGE_LAYOUT_HANDLER,
                        useExisting: CartPageLayoutHandler,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQTRCNUUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBM0IvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFNBQVM7b0JBQ1QsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsVUFBVTtvQkFDVixrQkFBa0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjt3QkFDNUIsV0FBVyxFQUFFLHFCQUFxQjt3QkFDbEMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDYXJ0TW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBBR0VfTEFZT1VUX0hBTkRMRVIgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5pbXBvcnQgeyBBZGRUb0NhcnRNb2R1bGUgfSBmcm9tICcuL2FkZC10by1jYXJ0L2FkZC10by1jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0RGV0YWlsc01vZHVsZSB9IGZyb20gJy4vY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFBhZ2VMYXlvdXRIYW5kbGVyIH0gZnJvbSAnLi9jYXJ0LXBhZ2UtbGF5b3V0LWhhbmRsZXInO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENhcnRUb3RhbHNNb2R1bGUgfSBmcm9tICcuL2NhcnQtdG90YWxzL2NhcnQtdG90YWxzLm1vZHVsZSc7XG5pbXBvcnQgeyBNaW5pQ2FydE1vZHVsZSB9IGZyb20gJy4vbWluaS1jYXJ0L21pbmktY2FydC5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkVG9XaXNoTGlzdE1vZHVsZSB9IGZyb20gJy4vYWRkLXRvLXdpc2hsaXN0L2FkZC10by13aXNoLWxpc3QubW9kdWxlJztcbmltcG9ydCB7IFNhdmVGb3JMYXRlck1vZHVsZSB9IGZyb20gJy4vc2F2ZS1mb3ItbGF0ZXIvc2F2ZS1mb3ItbGF0ZXIubW9kdWxlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOZ2JNb2R1bGUsXG4gICAgQ2FydERldGFpbHNNb2R1bGUsXG4gICAgQ2FydFRvdGFsc01vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIFNhdmVGb3JMYXRlck1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFkZFRvV2lzaExpc3RNb2R1bGUsXG4gICAgQ2FydERldGFpbHNNb2R1bGUsXG4gICAgQ2FydFRvdGFsc01vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIEFkZFRvQ2FydE1vZHVsZSxcbiAgICBNaW5pQ2FydE1vZHVsZSxcbiAgICBDYXJ0TW9kdWxlLFxuICAgIFNhdmVGb3JMYXRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUEFHRV9MQVlPVVRfSEFORExFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBDYXJ0UGFnZUxheW91dEhhbmRsZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q29tcG9uZW50TW9kdWxlIHt9XG4iXX0=