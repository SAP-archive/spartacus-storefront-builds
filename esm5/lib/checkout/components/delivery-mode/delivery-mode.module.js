/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule, AuthGuard, } from '@spartacus/core';
import { DeliveryModeComponent } from './delivery-mode.component';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CartNotEmptyGuard } from './../../../../cms-components/checkout/cart/cart-not-empty.guard';
var DeliveryModeModule = /** @class */ (function () {
    function DeliveryModeModule() {
    }
    DeliveryModeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        I18nModule,
                        SpinnerModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CheckoutDeliveryMode: {
                                    selector: 'cx-delivery-mode',
                                    guards: [AuthGuard, CartNotEmptyGuard, ShippingAddressSetGuard],
                                },
                            },
                        }))),
                    ],
                    declarations: [DeliveryModeComponent],
                    entryComponents: [DeliveryModeComponent],
                    exports: [DeliveryModeComponent],
                },] }
    ];
    return DeliveryModeModule;
}());
export { DeliveryModeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9kZWxpdmVyeS1tb2RlL2RlbGl2ZXJ5LW1vZGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsWUFBWSxFQUVaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDcEc7SUFBQTtJQW1CaUMsQ0FBQzs7Z0JBbkJqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixVQUFVO3dCQUNWLGFBQWE7d0JBQ2IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLG9CQUFvQixFQUFFO29DQUNwQixRQUFRLEVBQUUsa0JBQWtCO29DQUM1QixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7aUNBQ2hFOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDckMsZUFBZSxFQUFFLENBQUMscUJBQXFCLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNqQzs7SUFDZ0MseUJBQUM7Q0FBQSxBQW5CbEMsSUFtQmtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcbiAgQ29uZmlnTW9kdWxlLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIEF1dGhHdWFyZCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZUNvbXBvbmVudCB9IGZyb20gJy4vZGVsaXZlcnktbW9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hpcHBpbmdBZGRyZXNzU2V0R3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvc2hpcHBpbmctYWRkcmVzcy1zZXQuZ3VhcmQnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXREZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LWRlbGl2ZXJ5LW1vZGUnLFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmQsIFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RlbGl2ZXJ5TW9kZUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RlbGl2ZXJ5TW9kZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEZWxpdmVyeU1vZGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeU1vZGVNb2R1bGUge31cbiJdfQ==