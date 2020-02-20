import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturesConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { ItemCounterModule } from '../../../shared/components/item-counter/item-counter.module';
import { MediaModule } from '../../../shared/components/media/media.module';
import { PromotionsModule } from '../../checkout/components/promotions/promotions.module';
import { CartCouponModule } from '../cart-coupon/cart-coupon.module';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
var CartSharedModule = /** @class */ (function () {
    function CartSharedModule() {
    }
    CartSharedModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                CartCouponModule,
                ReactiveFormsModule,
                UrlModule,
                NgbModule,
                PromotionsModule,
                I18nModule,
                MediaModule,
                ItemCounterModule,
                FeaturesConfigModule,
            ],
            declarations: [
                CartItemComponent,
                OrderSummaryComponent,
                CartItemListComponent,
            ],
            exports: [CartItemComponent, CartItemListComponent, OrderSummaryComponent],
        })
    ], CartSharedModule);
    return CartSharedModule;
}());
export { CartSharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGFyZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUF1QmhGO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixnQkFBZ0I7UUFyQjVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixtQkFBbUI7Z0JBQ25CLFNBQVM7Z0JBQ1QsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLFVBQVU7Z0JBQ1YsV0FBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLG9CQUFvQjthQUNyQjtZQUNELFlBQVksRUFBRTtnQkFDWixpQkFBaUI7Z0JBQ2pCLHFCQUFxQjtnQkFDckIscUJBQXFCO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLENBQUM7U0FDM0UsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRmVhdHVyZXNDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUsIFVybE1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJdGVtQ291bnRlck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIubW9kdWxlJztcbmltcG9ydCB7IE1lZGlhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEubW9kdWxlJztcbmltcG9ydCB7IFByb21vdGlvbnNNb2R1bGUgfSBmcm9tICcuLi8uLi9jaGVja291dC9jb21wb25lbnRzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydENvdXBvbk1vZHVsZSB9IGZyb20gJy4uL2NhcnQtY291cG9uL2NhcnQtY291cG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0SXRlbUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NhcnQtaXRlbS1saXN0L2NhcnQtaXRlbS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJ0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJTdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1zdW1tYXJ5L29yZGVyLXN1bW1hcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ2FydENvdXBvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIEl0ZW1Db3VudGVyTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYXJ0SXRlbUNvbXBvbmVudCxcbiAgICBPcmRlclN1bW1hcnlDb21wb25lbnQsXG4gICAgQ2FydEl0ZW1MaXN0Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbQ2FydEl0ZW1Db21wb25lbnQsIENhcnRJdGVtTGlzdENvbXBvbmVudCwgT3JkZXJTdW1tYXJ5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFNoYXJlZE1vZHVsZSB7fVxuIl19