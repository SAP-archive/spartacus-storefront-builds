/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartNotEmptyGuard } from './../../../../cms-components/checkout/cart/cart-not-empty.guard';
import { UrlModule, CheckoutModule, I18nModule, ConfigModule, AuthGuard, } from '@spartacus/core';
import { PlaceOrderComponent } from './place-order.component';
export class PlaceOrderModule {
}
PlaceOrderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CheckoutModule,
                    RouterModule,
                    UrlModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CheckoutPlaceOrder: {
                                selector: 'cx-place-order',
                                guards: [AuthGuard, CartNotEmptyGuard],
                            },
                        },
                    }))),
                ],
                declarations: [PlaceOrderComponent],
                entryComponents: [PlaceOrderComponent],
                exports: [PlaceOrderComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDcEcsT0FBTyxFQUNMLFNBQVMsRUFDVCxjQUFjLEVBQ2QsVUFBVSxFQUNWLFlBQVksRUFFWixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXNCOUQsTUFBTSxPQUFPLGdCQUFnQjs7O1lBcEI1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxZQUFZO29CQUNaLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXO3dCQUNqQyxhQUFhLEVBQUU7NEJBQ2Isa0JBQWtCLEVBQUU7Z0NBQ2xCLFFBQVEsRUFBRSxnQkFBZ0I7Z0NBQzFCLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQzs2QkFDdkM7eUJBQ0Y7cUJBQ0YsRUFBQSxDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQge1xuICBVcmxNb2R1bGUsXG4gIENoZWNrb3V0TW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBDb25maWdNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgQXV0aEd1YXJkLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGxhY2VPcmRlckNvbXBvbmVudCB9IGZyb20gJy4vcGxhY2Utb3JkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDaGVja291dE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0UGxhY2VPcmRlcjoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtcGxhY2Utb3JkZXInLFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGxhY2VPcmRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1BsYWNlT3JkZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGxhY2VPcmRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJNb2R1bGUge31cbiJdfQ==