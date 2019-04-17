/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './address-book.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { CardModule } from '../../ui/components/card/card.module';
import { AddressFormModule } from '../../checkout/components/multi-step-checkout/shipping-address/address-form/address-form.module';
import { SpinnerModule } from '../../ui/components/spinner/spinner.module';
import { UserService, ConfigModule, I18nModule, } from '@spartacus/core';
import { AddressBookComponentService } from './address-book.component.service';
var AddressBookModule = /** @class */ (function () {
    function AddressBookModule() {
    }
    AddressBookModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                AccountAddressBookComponent: {
                                    selector: 'cx-address-book',
                                    providers: [
                                        {
                                            provide: AddressBookComponentService,
                                            useClass: AddressBookComponentService,
                                            deps: [UserService],
                                        },
                                    ],
                                },
                            },
                        }))),
                        CardModule,
                        AddressFormModule,
                        SpinnerModule,
                        I18nModule,
                    ],
                    declarations: [AddressBookComponent, AddressCardComponent],
                    exports: [AddressBookComponent, AddressCardComponent],
                    providers: [UserService, AddressBookComponentService],
                    entryComponents: [AddressBookComponent],
                },] }
    ];
    return AddressBookModule;
}());
export { AddressBookModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMtbGliL2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUdBQWlHLENBQUM7QUFDcEksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsWUFBWSxFQUVaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FO0lBQUE7SUEyQmdDLENBQUM7O2dCQTNCaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYiwyQkFBMkIsRUFBRTtvQ0FDM0IsUUFBUSxFQUFFLGlCQUFpQjtvQ0FDM0IsU0FBUyxFQUFFO3dDQUNUOzRDQUNFLE9BQU8sRUFBRSwyQkFBMkI7NENBQ3BDLFFBQVEsRUFBRSwyQkFBMkI7NENBQ3JDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQzt5Q0FDcEI7cUNBQ0Y7aUNBQ0Y7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3dCQUNGLFVBQVU7d0JBQ1YsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLFVBQVU7cUJBQ1g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7b0JBQzFELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDO29CQUNyRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsMkJBQTJCLENBQUM7b0JBQ3JELGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUN4Qzs7SUFDK0Isd0JBQUM7Q0FBQSxBQTNCakMsSUEyQmlDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBZGRyZXNzQm9va0NvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy1ib29rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRyZXNzQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy1jYXJkL2FkZHJlc3MtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uL3VpL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRyZXNzRm9ybU1vZHVsZSB9IGZyb20gJy4uLy4uL2NoZWNrb3V0L2NvbXBvbmVudHMvbXVsdGktc3RlcC1jaGVja291dC9zaGlwcGluZy1hZGRyZXNzL2FkZHJlc3MtZm9ybS9hZGRyZXNzLWZvcm0ubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi91aS9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgVXNlclNlcnZpY2UsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9hZGRyZXNzLWJvb2suY29tcG9uZW50LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBBY2NvdW50QWRkcmVzc0Jvb2tDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LWFkZHJlc3MtYm9vaycsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb3ZpZGU6IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgdXNlQ2xhc3M6IEFkZHJlc3NCb29rQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgZGVwczogW1VzZXJTZXJ2aWNlXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBBZGRyZXNzRm9ybU1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FkZHJlc3NCb29rQ29tcG9uZW50LCBBZGRyZXNzQ2FyZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBZGRyZXNzQm9va0NvbXBvbmVudCwgQWRkcmVzc0NhcmRDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgQWRkcmVzc0Jvb2tDb21wb25lbnRTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQWRkcmVzc0Jvb2tDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQm9va01vZHVsZSB7fVxuIl19