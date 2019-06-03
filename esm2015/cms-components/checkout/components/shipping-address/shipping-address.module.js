/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { CardModule } from '../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
// tslint:disable-next-line:max-line-length
import { CheckoutProgressMobileBottomModule } from '../checkout-progress/checkout-progress-mobile-bottom/checkout-progress-mobile-bottom.module';
import { CheckoutProgressMobileTopModule } from '../checkout-progress/checkout-progress-mobile-top/checkout-progress-mobile-top.module';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { AddressFormModule } from './address-form/address-form.module';
import { ShippingAddressComponent } from './shipping-address.component';
export class ShippingAddressModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOztBQUVyRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQztBQUNqSixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1RkFBdUYsQ0FBQztBQUN4SSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQXlCeEUsTUFBTSxPQUFPLHFCQUFxQjs7O1lBdkJqQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFVBQVU7b0JBQ1YsYUFBYTtvQkFDYixVQUFVO29CQUNWLCtCQUErQjtvQkFDL0Isa0NBQWtDO29CQUNsQyxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2IsdUJBQXVCLEVBQUU7Z0NBQ3ZCLFFBQVEsRUFBRSxxQkFBcUI7Z0NBQy9CLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQzs2QkFDdkM7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUN4QyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSB9IGZyb20gJy4uL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgQWRkcmVzc0Zvcm1Nb2R1bGUgfSBmcm9tICcuL2FkZHJlc3MtZm9ybS9hZGRyZXNzLWZvcm0ubW9kdWxlJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBBZGRyZXNzRm9ybU1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9iaWxlVG9wTW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0U2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1zaGlwcGluZy1hZGRyZXNzJyxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NoaXBwaW5nQWRkcmVzc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NoaXBwaW5nQWRkcmVzc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTaGlwcGluZ0FkZHJlc3NDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTaGlwcGluZ0FkZHJlc3NNb2R1bGUge31cbiJdfQ==