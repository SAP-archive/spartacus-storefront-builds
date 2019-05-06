/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutModule, I18nModule } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/checkout/cart/cart-shared/cart-shared.module';
import { PwaModule } from '../../../../cms-structure/pwa/index';
import { CardModule } from '../../../../shared/components/card/card.module';
import { OrderConfirmationComponent } from './order-confirmation.component';
var OrderConfirmationModule = /** @class */ (function () {
    function OrderConfirmationModule() {
    }
    OrderConfirmationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CartSharedModule,
                        CardModule,
                        PwaModule,
                        CheckoutModule,
                        I18nModule,
                    ],
                    declarations: [OrderConfirmationComponent],
                    exports: [OrderConfirmationComponent],
                },] }
    ];
    return OrderConfirmationModule;
}());
export { OrderConfirmationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDNUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFNUU7SUFBQTtJQVlzQyxDQUFDOztnQkFadEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixTQUFTO3dCQUNULGNBQWM7d0JBQ2QsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztvQkFDMUMsT0FBTyxFQUFFLENBQUMsMEJBQTBCLENBQUM7aUJBQ3RDOztJQUNxQyw4QkFBQztDQUFBLEFBWnZDLElBWXVDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IFB3YU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcHdhL2luZGV4JztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDYXJ0U2hhcmVkTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgUHdhTW9kdWxlLFxuICAgIENoZWNrb3V0TW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW09yZGVyQ29uZmlybWF0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25Nb2R1bGUge31cbiJdfQ==