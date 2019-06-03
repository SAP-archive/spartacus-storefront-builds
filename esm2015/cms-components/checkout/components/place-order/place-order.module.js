/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, CheckoutModule, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUNULGNBQWMsRUFFZCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBc0I5RCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFwQjVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxVQUFVO29CQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYixrQkFBa0IsRUFBRTtnQ0FDbEIsUUFBUSxFQUFFLGdCQUFnQjtnQ0FDMUIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDOzZCQUN2Qzt5QkFDRjtxQkFDRixFQUFBLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ2hlY2tvdXRNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0Tm90RW1wdHlHdWFyZCB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBQbGFjZU9yZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wbGFjZS1vcmRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENoZWNrb3V0TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRQbGFjZU9yZGVyOiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdjeC1wbGFjZS1vcmRlcicsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkLCBDYXJ0Tm90RW1wdHlHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQbGFjZU9yZGVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGxhY2VPcmRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQbGFjZU9yZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUGxhY2VPcmRlck1vZHVsZSB7fVxuIl19