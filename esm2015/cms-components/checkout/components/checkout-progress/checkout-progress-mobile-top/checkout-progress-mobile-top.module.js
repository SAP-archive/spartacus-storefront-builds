import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { defaultCheckoutConfig } from '../../../config/default-checkout-config';
import { CheckoutAuthGuard } from '../../../guards/checkout-auth.guard';
import { CartNotEmptyGuard } from './../../../../../cms-components/cart/cart-not-empty.guard';
import { CheckoutProgressMobileTopComponent } from './checkout-progress-mobile-top.component';
let CheckoutProgressMobileTopModule = class CheckoutProgressMobileTopModule {
};
CheckoutProgressMobileTopModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            UrlModule,
            I18nModule,
            RouterModule,
            ConfigModule.withConfig(defaultCheckoutConfig),
            ConfigModule.withConfig({
                cmsComponents: {
                    CheckoutProgressMobileTop: {
                        component: CheckoutProgressMobileTopComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                    },
                },
            }),
        ],
        declarations: [CheckoutProgressMobileTopComponent],
        entryComponents: [CheckoutProgressMobileTopComponent],
        exports: [CheckoutProgressMobileTopComponent],
    })
], CheckoutProgressMobileTopModule);
export { CheckoutProgressMobileTopModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL2NoZWNrb3V0LXByb2dyZXNzL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AvY2hlY2tvdXQtcHJvZ3Jlc3MtbW9iaWxlLXRvcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM5RixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQXFCOUYsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7Q0FBRyxDQUFBO0FBQWxDLCtCQUErQjtJQXBCM0MsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFNBQVM7WUFDVCxVQUFVO1lBQ1YsWUFBWTtZQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7WUFDOUMsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLHlCQUF5QixFQUFFO3dCQUN6QixTQUFTLEVBQUUsa0NBQWtDO3dCQUM3QyxNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztxQkFDL0M7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztRQUNsRCxlQUFlLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztRQUNyRCxPQUFPLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztLQUM5QyxDQUFDO0dBQ1csK0JBQStCLENBQUc7U0FBbEMsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGRlZmF1bHRDaGVja291dENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9kZWZhdWx0LWNoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBDaGVja291dEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2d1YXJkcy9jaGVja291dC1hdXRoLmd1YXJkJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrb3V0LXByb2dyZXNzLW1vYmlsZS10b3AuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRDaGVja291dENvbmZpZyksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3A6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQ2hlY2tvdXRBdXRoR3VhcmQsIENhcnROb3RFbXB0eUd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDaGVja291dFByb2dyZXNzTW9iaWxlVG9wQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NoZWNrb3V0UHJvZ3Jlc3NNb2JpbGVUb3BDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFByb2dyZXNzTW9iaWxlVG9wTW9kdWxlIHt9XG4iXX0=