/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckoutModule, I18nModule } from '@spartacus/core';
import { CartSharedModule } from '../../../../cms-components/checkout/cart/cart-shared/cart-shared.module';
import { PwaModule } from '../../../pwa/pwa.module';
import { CardModule } from '../../../ui/components/card/card.module';
import { MediaModule } from './../../../ui/components/media/media.module';
import { OrderConfirmationComponent } from './order-confirmation.component';
export class OrderConfirmationModule {
}
OrderConfirmationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MediaModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jaGVja291dC9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1jb25maXJtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBZTVFLE1BQU0sT0FBTyx1QkFBdUI7OztZQWJuQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLFVBQVU7b0JBQ1YsU0FBUztvQkFDVCxjQUFjO29CQUNkLFVBQVU7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQzFDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dE1vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgUHdhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vcHdhL3B3YS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3VpL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBNZWRpYU1vZHVsZSB9IGZyb20gJy4vLi4vLi4vLi4vdWkvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL29yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBQd2FNb2R1bGUsXG4gICAgQ2hlY2tvdXRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJDb25maXJtYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbT3JkZXJDb25maXJtYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvbk1vZHVsZSB7fVxuIl19