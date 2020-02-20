import { __decorate } from "tslib";
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
let CartComponentModule = class CartComponentModule {
};
CartComponentModule = __decorate([
    NgModule({
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
    })
], CartComponentModule);
export { CartComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDL0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQTRCNUUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBRyxDQUFBO0FBQXRCLG1CQUFtQjtJQTNCL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsU0FBUztZQUNULGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtTQUNuQjtRQUNELE9BQU8sRUFBRTtZQUNQLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsY0FBYztZQUNkLFVBQVU7WUFDVixrQkFBa0I7U0FDbkI7UUFDRCxZQUFZLEVBQUUsRUFBRTtRQUNoQixTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBQUc7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IENhcnRNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUEFHRV9MQVlPVVRfSEFORExFUiB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC1oYW5kbGVyJztcbmltcG9ydCB7IEFkZFRvQ2FydE1vZHVsZSB9IGZyb20gJy4vYWRkLXRvLWNhcnQvYWRkLXRvLWNhcnQubW9kdWxlJztcbmltcG9ydCB7IENhcnREZXRhaWxzTW9kdWxlIH0gZnJvbSAnLi9jYXJ0LWRldGFpbHMvY2FydC1kZXRhaWxzLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0UGFnZUxheW91dEhhbmRsZXIgfSBmcm9tICcuL2NhcnQtcGFnZS1sYXlvdXQtaGFuZGxlcic7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFRvdGFsc01vZHVsZSB9IGZyb20gJy4vY2FydC10b3RhbHMvY2FydC10b3RhbHMubW9kdWxlJztcbmltcG9ydCB7IE1pbmlDYXJ0TW9kdWxlIH0gZnJvbSAnLi9taW5pLWNhcnQvbWluaS1jYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRUb1dpc2hMaXN0TW9kdWxlIH0gZnJvbSAnLi9hZGQtdG8td2lzaGxpc3QvYWRkLXRvLXdpc2gtbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgU2F2ZUZvckxhdGVyTW9kdWxlIH0gZnJvbSAnLi9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5tb2R1bGUnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5nYk1vZHVsZSxcbiAgICBDYXJ0RGV0YWlsc01vZHVsZSxcbiAgICBDYXJ0VG90YWxzTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgU2F2ZUZvckxhdGVyTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQWRkVG9XaXNoTGlzdE1vZHVsZSxcbiAgICBDYXJ0RGV0YWlsc01vZHVsZSxcbiAgICBDYXJ0VG90YWxzTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQWRkVG9DYXJ0TW9kdWxlLFxuICAgIE1pbmlDYXJ0TW9kdWxlLFxuICAgIENhcnRNb2R1bGUsXG4gICAgU2F2ZUZvckxhdGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQQUdFX0xBWU9VVF9IQU5ETEVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IENhcnRQYWdlTGF5b3V0SGFuZGxlcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRDb21wb25lbnRNb2R1bGUge31cbiJdfQ==