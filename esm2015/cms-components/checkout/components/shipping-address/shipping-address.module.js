import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
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
let ShippingAddressModule = class ShippingAddressModule {
};
ShippingAddressModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            AddressFormModule,
            CardModule,
            SpinnerModule,
            I18nModule,
            CheckoutProgressMobileTopModule,
            CheckoutProgressMobileBottomModule,
        ],
        providers: [
            provideDefaultConfig({
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
            }),
        ],
        declarations: [ShippingAddressComponent],
        entryComponents: [ShippingAddressComponent],
        exports: [ShippingAddressComponent],
    })
], ShippingAddressModule);
export { ShippingAddressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSwyQ0FBMkM7QUFDM0MsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sNkZBQTZGLENBQUM7QUFDakosT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDeEksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUErQnhFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0NBQUcsQ0FBQTtBQUF4QixxQkFBcUI7SUE3QmpDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFVBQVU7WUFDVixhQUFhO1lBQ2IsVUFBVTtZQUNWLCtCQUErQjtZQUMvQixrQ0FBa0M7U0FDbkM7UUFDRCxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBWTtnQkFDOUIsYUFBYSxFQUFFO29CQUNiLHVCQUF1QixFQUFFO3dCQUN2QixTQUFTLEVBQUUsd0JBQXdCO3dCQUNuQyxNQUFNLEVBQUU7NEJBQ04saUJBQWlCOzRCQUNqQixpQkFBaUI7NEJBQ2pCLDBCQUEwQjt5QkFDM0I7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUN4QyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztRQUMzQyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1cscUJBQXFCLENBQUc7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBJMThuTW9kdWxlLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Nb2R1bGUgfSBmcm9tICcuLi9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20ubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BNb2R1bGUgfSBmcm9tICcuLi9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AubW9kdWxlJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IEFkZHJlc3NGb3JtTW9kdWxlIH0gZnJvbSAnLi9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHNMb2FkZWRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9jaGVja291dC1kZXRhaWxzLWxvYWRlZC5ndWFyZCc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NDb21wb25lbnQgfSBmcm9tICcuL3NoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQWRkcmVzc0Zvcm1Nb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSxcbiAgICBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRTaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtcbiAgICAgICAgICAgIENoZWNrb3V0QXV0aEd1YXJkLFxuICAgICAgICAgICAgQ2FydE5vdEVtcHR5R3VhcmQsXG4gICAgICAgICAgICBDaGVja291dERldGFpbHNMb2FkZWRHdWFyZCxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NoaXBwaW5nQWRkcmVzc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc01vZHVsZSB7fVxuIl19