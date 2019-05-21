/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UrlModule, I18nModule, ConfigModule, AuthGuard, } from '@spartacus/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { defaultCheckoutConfig } from '../../../config/default-checkout-config';
import { CheckoutProgressMobileTopComponent } from './checkout-progress-mobile-top.component';
import { CartNotEmptyGuard } from './../../../../../cms-components/checkout/cart/cart-not-empty.guard';
var CheckoutProgressMobileTopModule = /** @class */ (function () {
    function CheckoutProgressMobileTopModule() {
    }
    CheckoutProgressMobileTopModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        UrlModule,
                        I18nModule,
                        RouterModule,
                        ConfigModule.withConfig(defaultCheckoutConfig),
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CheckoutProgressMobileTop: {
                                    selector: 'cx-checkout-progress-mobile-top',
                                    guards: [AuthGuard, CartNotEmptyGuard],
                                },
                            },
                        }))),
                    ],
                    declarations: [CheckoutProgressMobileTopComponent],
                    entryComponents: [CheckoutProgressMobileTopComponent],
                    exports: [CheckoutProgressMobileTopComponent],
                },] }
    ];
    return CheckoutProgressMobileTopModule;
}());
export { CheckoutProgressMobileTopModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtdG9wL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBRVosU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3ZHO0lBQUE7SUFvQjhDLENBQUM7O2dCQXBCOUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFNBQVM7d0JBQ1QsVUFBVTt3QkFDVixZQUFZO3dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7d0JBQzlDLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7NEJBQ2pDLGFBQWEsRUFBRTtnQ0FDYix5QkFBeUIsRUFBRTtvQ0FDekIsUUFBUSxFQUFFLGlDQUFpQztvQ0FDM0MsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDO2lDQUN2Qzs2QkFDRjt5QkFDRixFQUFBLENBQUM7cUJBQ0g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsa0NBQWtDLENBQUM7b0JBQ2xELGVBQWUsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO29CQUNyRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDOUM7O0lBQzZDLHNDQUFDO0NBQUEsQUFwQi9DLElBb0IrQztTQUFsQywrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBVcmxNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIENvbmZpZ01vZHVsZSxcbiAgQ21zQ29uZmlnLFxuICBBdXRoR3VhcmQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBkZWZhdWx0Q2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvZGVmYXVsdC1jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1ub3QtZW1wdHkuZ3VhcmQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdENoZWNrb3V0Q29uZmlnKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcDoge1xuICAgICAgICAgIHNlbGVjdG9yOiAnY3gtY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcCcsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkLCBDYXJ0Tm90RW1wdHlHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDaGVja291dFByb2dyZXNzTW9iaWxlVG9wQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDaGVja291dFByb2dyZXNzTW9iaWxlVG9wQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRQcm9ncmVzc01vYmlsZVRvcE1vZHVsZSB7fVxuIl19