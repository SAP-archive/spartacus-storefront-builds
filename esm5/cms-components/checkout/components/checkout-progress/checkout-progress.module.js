/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, Config, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { CheckoutConfig } from '../../config/checkout-config';
import { defaultCheckoutConfig } from '../../config/default-checkout-config';
import { CartNotEmptyGuard } from './../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutProgressComponent } from './checkout-progress.component';
var CheckoutProgressModule = /** @class */ (function () {
    function CheckoutProgressModule() {
    }
    CheckoutProgressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        UrlModule,
                        I18nModule,
                        RouterModule,
                        ConfigModule.withConfig(defaultCheckoutConfig),
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CheckoutProgress: {
                                    selector: 'cx-checkout-progress',
                                    guards: [AuthGuard, CartNotEmptyGuard],
                                },
                            },
                        }))),
                    ],
                    declarations: [CheckoutProgressComponent],
                    entryComponents: [CheckoutProgressComponent],
                    exports: [CheckoutProgressComponent],
                    providers: [{ provide: CheckoutConfig, useExisting: Config }],
                },] }
    ];
    return CheckoutProgressModule;
}());
export { CheckoutProgressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9jaGVja291dC1wcm9ncmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsU0FBUyxFQUVULE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRTtJQUFBO0lBcUJxQyxDQUFDOztnQkFyQnJDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixTQUFTO3dCQUNULFVBQVU7d0JBQ1YsWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3dCQUM5QyxZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IsZ0JBQWdCLEVBQUU7b0NBQ2hCLFFBQVEsRUFBRSxzQkFBc0I7b0NBQ2hDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQztpQ0FDdkM7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUN6QyxlQUFlLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDNUMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7aUJBQzlEOztJQUNvQyw2QkFBQztDQUFBLEFBckJ0QyxJQXFCc0M7U0FBekIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2RlZmF1bHQtY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LXByb2dyZXNzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRDaGVja291dENvbmZpZyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0UHJvZ3Jlc3M6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LWNoZWNrb3V0LXByb2dyZXNzJyxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrb3V0UHJvZ3Jlc3NDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja291dFByb2dyZXNzQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NoZWNrb3V0UHJvZ3Jlc3NDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENoZWNrb3V0Q29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFByb2dyZXNzTW9kdWxlIHt9XG4iXX0=