/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { defaultCheckoutConfig } from '../../../config/default-checkout-config';
import { CartNotEmptyGuard } from './../../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutProgressMobileBottomComponent } from './checkout-progress-mobile-bottom.component';
var CheckoutProgressMobileBottomModule = /** @class */ (function () {
    function CheckoutProgressMobileBottomModule() {
    }
    CheckoutProgressMobileBottomModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        UrlModule,
                        I18nModule,
                        RouterModule,
                        ConfigModule.withConfig(defaultCheckoutConfig),
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CheckoutProgressMobileBottom: {
                                    selector: 'cx-checkout-progress-mobile-bottom',
                                    guards: [AuthGuard, CartNotEmptyGuard],
                                },
                            },
                        }))),
                    ],
                    declarations: [CheckoutProgressMobileBottomComponent],
                    entryComponents: [CheckoutProgressMobileBottomComponent],
                    exports: [CheckoutProgressMobileBottomComponent],
                },] }
    ];
    return CheckoutProgressMobileBottomModule;
}());
export { CheckoutProgressMobileBottomModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDOUYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEc7SUFBQTtJQW9CaUQsQ0FBQzs7Z0JBcEJqRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxVQUFVO3dCQUNWLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDOUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzs0QkFDakMsYUFBYSxFQUFFO2dDQUNiLDRCQUE0QixFQUFFO29DQUM1QixRQUFRLEVBQUUsb0NBQW9DO29DQUM5QyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7aUNBQ3ZDOzZCQUNGO3lCQUNGLEVBQUEsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztvQkFDckQsZUFBZSxFQUFFLENBQUMscUNBQXFDLENBQUM7b0JBQ3hELE9BQU8sRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2lCQUNqRDs7SUFDZ0QseUNBQUM7Q0FBQSxBQXBCbEQsSUFvQmtEO1NBQXJDLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGRlZmF1bHRDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9kZWZhdWx0LWNoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Q2hlY2tvdXRDb25maWcpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tOiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tJyxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tTW9kdWxlIHt9XG4iXX0=