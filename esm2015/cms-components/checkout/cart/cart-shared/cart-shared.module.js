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
import { FormComponentsModule, MediaModule } from '../../../../shared/index';
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
                    UrlTranslationModule,
                    NgbModule,
                    PromotionsModule,
                    I18nModule,
                    MediaModule,
                    FormComponentsModule,
                ],
                declarations: [
                    CartItemComponent,
                    OrderSummaryComponent,
                    CartItemListComponent,
                ],
                exports: [CartItemComponent, CartItemListComponent, OrderSummaryComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGFyZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQXFCaEYsTUFBTSxPQUFPLGdCQUFnQjs7O1lBbkI1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsU0FBUztvQkFDVCxnQkFBZ0I7b0JBQ2hCLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxvQkFBb0I7aUJBQ3JCO2dCQUNELFlBQVksRUFBRTtvQkFDWixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQzthQUMzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBJMThuTW9kdWxlLCBVcmxUcmFuc2xhdGlvbk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2NoZWNrb3V0L2NvbXBvbmVudHMvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50c01vZHVsZSwgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FydEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE9yZGVyU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgTmdiTW9kdWxlLFxuICAgIFByb21vdGlvbnNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBGb3JtQ29tcG9uZW50c01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2FydEl0ZW1Db21wb25lbnQsXG4gICAgT3JkZXJTdW1tYXJ5Q29tcG9uZW50LFxuICAgIENhcnRJdGVtTGlzdENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW0NhcnRJdGVtQ29tcG9uZW50LCBDYXJ0SXRlbUxpc3RDb21wb25lbnQsIE9yZGVyU3VtbWFyeUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRTaGFyZWRNb2R1bGUge31cbiJdfQ==