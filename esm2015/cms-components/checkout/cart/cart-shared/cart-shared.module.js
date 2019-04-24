/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nModule, UrlTranslationModule } from '@spartacus/core';
import { PromotionsModule } from '../../../../lib/checkout/components/promotions/promotions.module';
import { ComponentsModule } from '../../../../lib/ui/components/components.module';
import { CartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
export class CartSharedModule {
}
CartSharedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    ReactiveFormsModule,
                    ComponentsModule,
                    UrlTranslationModule,
                    NgbModule,
                    PromotionsModule,
                    I18nModule,
                ],
                declarations: [
                    CartItemComponent,
                    OrderSummaryComponent,
                    CartItemListComponent,
                ],
                exports: [CartItemComponent, CartItemListComponent, OrderSummaryComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGFyZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBb0JoRixNQUFNLE9BQU8sZ0JBQWdCOzs7WUFsQjVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLFNBQVM7b0JBQ1QsZ0JBQWdCO29CQUNoQixVQUFVO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQzthQUMzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBJMThuTW9kdWxlLCBVcmxUcmFuc2xhdGlvbk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3VpL2NvbXBvbmVudHMvY29tcG9uZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FydEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tcG9uZW50c01vZHVsZSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgUHJvbW90aW9uc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDYXJ0SXRlbUNvbXBvbmVudCxcbiAgICBPcmRlclN1bW1hcnlDb21wb25lbnQsXG4gICAgQ2FydEl0ZW1MaXN0Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbQ2FydEl0ZW1Db21wb25lbnQsIENhcnRJdGVtTGlzdENvbXBvbmVudCwgT3JkZXJTdW1tYXJ5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFNoYXJlZE1vZHVsZSB7fVxuIl19