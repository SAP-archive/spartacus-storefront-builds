/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@spartacus/core';
import { CardModule } from '../../../../../shared/components/card/card.module';
import { SpinnerModule } from '../../../../../shared/components/spinner/spinner.module';
import { AddressFormModule } from './address-form/address-form.module';
import { ShippingAddressComponent } from './shipping-address.component';
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
                    ],
                    declarations: [ShippingAddressComponent],
                    entryComponents: [ShippingAddressComponent],
                    exports: [ShippingAddressComponent],
                },] }
    ];
    return ShippingAddressModule;
}());
export { ShippingAddressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctYWRkcmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9tdWx0aS1zdGVwLWNoZWNrb3V0L3NoaXBwaW5nLWFkZHJlc3Mvc2hpcHBpbmctYWRkcmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RTtJQUFBO0lBYW9DLENBQUM7O2dCQWJwQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixVQUFVO3FCQUNYO29CQUNELFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDM0MsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3BDOztJQUNtQyw0QkFBQztDQUFBLEFBYnJDLElBYXFDO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQWRkcmVzc0Zvcm1Nb2R1bGUgfSBmcm9tICcuL2FkZHJlc3MtZm9ybS9hZGRyZXNzLWZvcm0ubW9kdWxlJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBBZGRyZXNzRm9ybU1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIFNwaW5uZXJNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2hpcHBpbmdBZGRyZXNzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NoaXBwaW5nQWRkcmVzc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNoaXBwaW5nQWRkcmVzc01vZHVsZSB7fVxuIl19