/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, AuthGuard, } from '@spartacus/core';
import { AddressFormModule } from './address-form/address-form.module';
import { CardModule } from '../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { ShippingAddressComponent } from './shipping-address.component';
import { CheckoutProgressMobileTopModule } from '../checkout-progress/checkout-progress-mobile-top/checkout-progress-mobile-top.module';
// tslint:disable-next-line:max-line-length
import { CheckoutProgressMobileBottomModule } from '../checkout-progress/checkout-progress-mobile-bottom/checkout-progress-mobile-bottom.module';
import { CartNotEmptyGuard } from './../../../../cms-components/checkout/cart/cart-not-empty.guard';
var ShippingAddressModule = /** @class */ (function () {
    function ShippingAddressModule() {
    }
    ShippingAddressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        AddressFormModule,
                        CardModule,
                        SpinnerModule,
                        I18nModule,
                        CheckoutProgressMobileTopModule,
                        CheckoutProgressMobileBottomModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CheckoutShippingAddress: {
                                    selector: 'cx-shipping-address',
                                    guards: [AuthGuard, CartNotEmptyGuard],
                                },
                            },
                        }))),
                    ],
                    declarations: [ShippingAddressComponent],
                    entryComponents: [ShippingAddressComponent],
                    exports: [ShippingAddressComponent],
                },] }
    ];
    return ShippingAddressModule;
}());
export { ShippingAddressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9zaGlwcGluZy1hZGRyZXNzL3NoaXBwaW5nLWFkZHJlc3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLFlBQVksRUFFWixVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQzs7QUFFeEksT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFDakosT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDcEc7SUFBQTtJQXVCb0MsQ0FBQzs7Z0JBdkJwQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixVQUFVO3dCQUNWLCtCQUErQjt3QkFDL0Isa0NBQWtDO3dCQUNsQyxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsdUJBQXVCLEVBQUU7b0NBQ3ZCLFFBQVEsRUFBRSxxQkFBcUI7b0NBQy9CLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztpQ0FDdkM7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDM0MsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3BDOztJQUNtQyw0QkFBQztDQUFBLEFBdkJyQyxJQXVCcUM7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBDb25maWdNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgQXV0aEd1YXJkLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzc0Zvcm1Nb2R1bGUgfSBmcm9tICcuL2FkZHJlc3MtZm9ybS9hZGRyZXNzLWZvcm0ubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5tb2R1bGUnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSB9IGZyb20gJy4uL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQWRkcmVzc0Zvcm1Nb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dFNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtc2hpcHBpbmctYWRkcmVzcycsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkLCBDYXJ0Tm90RW1wdHlHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTaGlwcGluZ0FkZHJlc3NDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTaGlwcGluZ0FkZHJlc3NDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzTW9kdWxlIHt9XG4iXX0=