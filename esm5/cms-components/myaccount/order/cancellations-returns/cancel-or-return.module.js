/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CancelOrderModule } from './cancel-order/cancel-order.module';
import { CancelOrderConfirmationModule } from './cancel-order-confirmation/cancel-order-confirmation.module';
import { ReturnOrderModule } from './return-order/return-order.module';
import { ReturnOrderConfirmationModule } from './return-order-confirmation/return-order-confirmation.module';
import { OrderCancelOrReturnService } from './cancel-or-return.service';
var OrderCancelOrReturnModule = /** @class */ (function () {
    function OrderCancelOrReturnModule() {
    }
    OrderCancelOrReturnModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CancelOrderModule,
                        CancelOrderConfirmationModule,
                        ReturnOrderModule,
                        ReturnOrderConfirmationModule,
                    ],
                    providers: [OrderCancelOrReturnService],
                },] }
    ];
    return OrderCancelOrReturnModule;
}());
export { OrderCancelOrReturnModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yLXJldHVybi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvY2FuY2VsbGF0aW9ucy1yZXR1cm5zL2NhbmNlbC1vci1yZXR1cm4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXhFO0lBQUE7SUFTd0MsQ0FBQzs7Z0JBVHhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQiw2QkFBNkI7d0JBQzdCLGlCQUFpQjt3QkFDakIsNkJBQTZCO3FCQUM5QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDeEM7O0lBQ3VDLGdDQUFDO0NBQUEsQUFUekMsSUFTeUM7U0FBNUIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbmNlbE9yZGVyTW9kdWxlIH0gZnJvbSAnLi9jYW5jZWwtb3JkZXIvY2FuY2VsLW9yZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBDYW5jZWxPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB9IGZyb20gJy4vY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBSZXR1cm5PcmRlck1vZHVsZSB9IGZyb20gJy4vcmV0dXJuLW9yZGVyL3JldHVybi1vcmRlci5tb2R1bGUnO1xuaW1wb3J0IHsgUmV0dXJuT3JkZXJDb25maXJtYXRpb25Nb2R1bGUgfSBmcm9tICcuL3JldHVybi1vcmRlci1jb25maXJtYXRpb24vcmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDYW5jZWxPclJldHVyblNlcnZpY2UgfSBmcm9tICcuL2NhbmNlbC1vci1yZXR1cm4uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYW5jZWxPcmRlck1vZHVsZSxcbiAgICBDYW5jZWxPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSxcbiAgICBSZXR1cm5PcmRlck1vZHVsZSxcbiAgICBSZXR1cm5PcmRlckNvbmZpcm1hdGlvbk1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbT3JkZXJDYW5jZWxPclJldHVyblNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNhbmNlbE9yUmV0dXJuTW9kdWxlIHt9XG4iXX0=