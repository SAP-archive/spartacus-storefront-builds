/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../../shared/components/spinner/spinner.module';
import { ShippingAddressSetGuard } from '../../guards/shipping-address-set.guard';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { DeliveryModeComponent } from './delivery-mode.component';
var DeliveryModeModule = /** @class */ (function () {
    function DeliveryModeModule() {
    }
    DeliveryModeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        I18nModule,
                        SpinnerModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CheckoutDeliveryMode: {
                                    component: DeliveryModeComponent,
                                    guards: [AuthGuard, CartNotEmptyGuard, ShippingAddressSetGuard],
                                },
                            },
                        }))),
                    ],
                    declarations: [DeliveryModeComponent],
                    entryComponents: [DeliveryModeComponent],
                    exports: [DeliveryModeComponent],
                },] }
    ];
    return DeliveryModeModule;
}());
export { DeliveryModeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktbW9kZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2RlbGl2ZXJ5LW1vZGUvZGVsaXZlcnktbW9kZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQUFBO0lBbUJpQyxDQUFDOztnQkFuQmpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2Isb0JBQW9CLEVBQUU7b0NBQ3BCLFNBQVMsRUFBRSxxQkFBcUI7b0NBQ2hDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztpQ0FDaEU7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNyQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7aUJBQ2pDOztJQUNnQyx5QkFBQztDQUFBLEFBbkJsQyxJQW1Ca0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL3NoaXBwaW5nLWFkZHJlc3Mtc2V0Lmd1YXJkJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IERlbGl2ZXJ5TW9kZUNvbXBvbmVudCB9IGZyb20gJy4vZGVsaXZlcnktbW9kZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dERlbGl2ZXJ5TW9kZToge1xuICAgICAgICAgIGNvbXBvbmVudDogRGVsaXZlcnlNb2RlQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmQsIFNoaXBwaW5nQWRkcmVzc1NldEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RlbGl2ZXJ5TW9kZUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RlbGl2ZXJ5TW9kZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEZWxpdmVyeU1vZGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeU1vZGVNb2R1bGUge31cbiJdfQ==