/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { CardModule } from '../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
// tslint:disable-next-line:max-line-length
import { CheckoutProgressMobileBottomModule } from '../checkout-progress/checkout-progress-mobile-bottom/checkout-progress-mobile-bottom.module';
import { CheckoutProgressMobileTopModule } from '../checkout-progress/checkout-progress-mobile-top/checkout-progress-mobile-top.module';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { AddressFormModule } from './address-form/address-form.module';
import { CheckoutDetailsLoadedGuard } from '../../guards/checkout-details-loaded.guard';
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
                                component: ShippingAddressComponent,
                                guards: [
                                    CheckoutAuthGuard,
                                    CartNotEmptyGuard,
                                    CheckoutDetailsLoadedGuard,
                                ],
                            },
                        },
                    }))),
                ],
                declarations: [ShippingAddressComponent],
                entryComponents: [ShippingAddressComponent],
                exports: [ShippingAddressComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRXJFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDZGQUE2RixDQUFDO0FBQ2pKLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQ3hJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBNkJ4RSxNQUFNLE9BQU8scUJBQXFCOzs7WUEzQmpDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsVUFBVTtvQkFDVixhQUFhO29CQUNiLFVBQVU7b0JBQ1YsK0JBQStCO29CQUMvQixrQ0FBa0M7b0JBQ2xDLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYix1QkFBdUIsRUFBRTtnQ0FDdkIsU0FBUyxFQUFFLHdCQUF3QjtnQ0FDbkMsTUFBTSxFQUFFO29DQUNOLGlCQUFpQjtvQ0FDakIsaUJBQWlCO29DQUNqQiwwQkFBMEI7aUNBQzNCOzZCQUNGO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDeEMsZUFBZSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQzNDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQtYXV0aC5ndWFyZCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tTW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9iaWxlVG9wTW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tvdXQtcHJvZ3Jlc3MvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBBZGRyZXNzRm9ybU1vZHVsZSB9IGZyb20gJy4vYWRkcmVzcy1mb3JtL2FkZHJlc3MtZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzTG9hZGVkR3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQtZGV0YWlscy1sb2FkZWQuZ3VhcmQnO1xuaW1wb3J0IHsgU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEFkZHJlc3NGb3JtTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbU1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRTaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtcbiAgICAgICAgICAgIENoZWNrb3V0QXV0aEd1YXJkLFxuICAgICAgICAgICAgQ2FydE5vdEVtcHR5R3VhcmQsXG4gICAgICAgICAgICBDaGVja291dERldGFpbHNMb2FkZWRHdWFyZCxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NoaXBwaW5nQWRkcmVzc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc01vZHVsZSB7fVxuIl19