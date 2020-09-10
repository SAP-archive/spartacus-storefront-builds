import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { DeliveryModeComponent } from './delivery-mode.component';
let DeliveryModeModule = class DeliveryModeModule {
};
DeliveryModeModule = __decorate([
    NgModule({
        imports: [CommonModule, ReactiveFormsModule, I18nModule, SpinnerModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CheckoutDeliveryMode: {
                        component: DeliveryModeComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBYSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFrQmxFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0NBQUcsQ0FBQTtBQUFyQixrQkFBa0I7SUFoQjlCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDO1FBQ3ZFLFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFZO2dCQUM5QixhQUFhLEVBQUU7b0JBQ2Isb0JBQW9CLEVBQUU7d0JBQ3BCLFNBQVMsRUFBRSxxQkFBcUI7d0JBQ2hDLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO3FCQUMvQztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3JDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ2pDLENBQUM7R0FDVyxrQkFBa0IsQ0FBRztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDbXNDb25maWcsIEkxOG5Nb2R1bGUsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9kZWxpdmVyeS1tb2RlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEkxOG5Nb2R1bGUsIFNwaW5uZXJNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXREZWxpdmVyeU1vZGU6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IERlbGl2ZXJ5TW9kZUNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtDaGVja291dEF1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGVsaXZlcnlNb2RlQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGVsaXZlcnlNb2RlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0RlbGl2ZXJ5TW9kZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5TW9kZU1vZHVsZSB7fVxuIl19