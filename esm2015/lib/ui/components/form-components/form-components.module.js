/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from '../../../bootstrap.module';
/* Components */
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ItemCounterComponent } from './item-counter/item-counter.component';
import { OnlyNumberDirective } from './../../directives/only-number/only-number.directive';
export class FormComponentsModule {
}
FormComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ReactiveFormsModule, BootstrapModule],
                declarations: [
                    StarRatingComponent,
                    ItemCounterComponent,
                    OnlyNumberDirective,
                ],
                exports: [StarRatingComponent, ItemCounterComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb21wb25lbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9mb3JtLWNvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUU1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQVczRixNQUFNLE9BQU8sb0JBQW9COzs7WUFUaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDO2dCQUMxRSxZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUM7YUFDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQm9vdHN0cmFwTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vYm9vdHN0cmFwLm1vZHVsZSc7XG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBTdGFyUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zdGFyLXJhdGluZy9zdGFyLXJhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUNvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE9ubHlOdW1iZXJEaXJlY3RpdmUgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMvb25seS1udW1iZXIvb25seS1udW1iZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEJvb3RzdHJhcE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN0YXJSYXRpbmdDb21wb25lbnQsXG4gICAgSXRlbUNvdW50ZXJDb21wb25lbnQsXG4gICAgT25seU51bWJlckRpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1N0YXJSYXRpbmdDb21wb25lbnQsIEl0ZW1Db3VudGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbXBvbmVudHNNb2R1bGUge31cbiJdfQ==