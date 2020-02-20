import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { DeliveryModeComponent } from './delivery-mode.component';
let DeliveryModeModule = class DeliveryModeModule {
};
DeliveryModeModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            I18nModule,
            SpinnerModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    CheckoutDeliveryMode: {
                        component: DeliveryModeComponent,
                        guards: [
                            CheckoutAuthGuard,
                            CartNotEmptyGuard,
                            ShippingAddressSetGuard,
                        ],
                    },
                },
            }),
        ],
        declarations: [DeliveryModeComponent],
        entryComponents: [DeliveryModeComponent],
        exports: [DeliveryModeComponent],
    })
], DeliveryModeModule);
export { DeliveryModeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBeUJsRSxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQUFHLENBQUE7QUFBckIsa0JBQWtCO0lBdkI5QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFVBQVU7WUFDVixhQUFhO1lBQ2IsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLG9CQUFvQixFQUFFO3dCQUNwQixTQUFTLEVBQUUscUJBQXFCO3dCQUNoQyxNQUFNLEVBQUU7NEJBQ04saUJBQWlCOzRCQUNqQixpQkFBaUI7NEJBQ2pCLHVCQUF1Qjt5QkFDeEI7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNyQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUN4QyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztLQUNqQyxDQUFDO0dBQ1csa0JBQWtCLENBQUc7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi9ndWFyZHMvY2hlY2tvdXQtYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcy9zaGlwcGluZy1hZGRyZXNzLXNldC5ndWFyZCc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBEZWxpdmVyeU1vZGVDb21wb25lbnQgfSBmcm9tICcuL2RlbGl2ZXJ5LW1vZGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXREZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IERlbGl2ZXJ5TW9kZUNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtcbiAgICAgICAgICAgIENoZWNrb3V0QXV0aEd1YXJkLFxuICAgICAgICAgICAgQ2FydE5vdEVtcHR5R3VhcmQsXG4gICAgICAgICAgICBTaGlwcGluZ0FkZHJlc3NTZXRHdWFyZCxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGVsaXZlcnlNb2RlQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGVsaXZlcnlNb2RlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0RlbGl2ZXJ5TW9kZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5TW9kZU1vZHVsZSB7fVxuIl19