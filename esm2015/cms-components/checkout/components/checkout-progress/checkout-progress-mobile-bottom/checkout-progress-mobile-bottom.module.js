/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { defaultCheckoutConfig } from '../../../config/default-checkout-config';
import { CartNotEmptyGuard } from './../../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutProgressMobileBottomComponent } from './checkout-progress-mobile-bottom.component';
export class CheckoutProgressMobileBottomModule {
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
                                component: CheckoutProgressMobileBottomComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS1ib3R0b20vY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLWJvdHRvbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDOUYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFxQnBHLE1BQU0sT0FBTyxrQ0FBa0M7OztZQXBCOUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixZQUFZO29CQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7b0JBQzlDLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYiw0QkFBNEIsRUFBRTtnQ0FDNUIsU0FBUyxFQUFFLHFDQUFxQztnQ0FDaEQsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDOzZCQUN2Qzt5QkFDRjtxQkFDRixFQUFBLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ3JELGVBQWUsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2dCQUN4RCxPQUFPLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGRlZmF1bHRDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9kZWZhdWx0LWNoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja291dC1wcm9ncmVzcy1tb2JpbGUtYm90dG9tLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Q2hlY2tvdXRDb25maWcpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDaGVja291dFByb2dyZXNzTW9iaWxlQm90dG9tQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Db21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2hlY2tvdXRQcm9ncmVzc01vYmlsZUJvdHRvbUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVCb3R0b21Nb2R1bGUge31cbiJdfQ==