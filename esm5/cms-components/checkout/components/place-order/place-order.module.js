import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { CartNotEmptyGuard } from '../../../cart/cart-not-empty.guard';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { PlaceOrderComponent } from './place-order.component';
var PlaceOrderModule = /** @class */ (function () {
    function PlaceOrderModule() {
    }
    PlaceOrderModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                UrlModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CheckoutPlaceOrder: {
                            component: PlaceOrderComponent,
                            guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                        },
                    },
                }),
            ],
            declarations: [PlaceOrderComponent],
            entryComponents: [PlaceOrderComponent],
            exports: [PlaceOrderComponent],
        })
    ], PlaceOrderModule);
    return PlaceOrderModule;
}());
export { PlaceOrderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXFCOUQ7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQW5CNUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixTQUFTO2dCQUNULFVBQVU7Z0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLGtCQUFrQixFQUFFOzRCQUNsQixTQUFTLEVBQUUsbUJBQW1COzRCQUM5QixNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQzt5QkFDL0M7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDbkMsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDdEMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDL0IsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkJztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgUGxhY2VPcmRlckNvbXBvbmVudCB9IGZyb20gJy4vcGxhY2Utb3JkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0UGxhY2VPcmRlcjoge1xuICAgICAgICAgIGNvbXBvbmVudDogUGxhY2VPcmRlckNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtDaGVja291dEF1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGxhY2VPcmRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1BsYWNlT3JkZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGxhY2VPcmRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJNb2R1bGUge31cbiJdfQ==