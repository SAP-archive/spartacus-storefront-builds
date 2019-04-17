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
var FormComponentsModule = /** @class */ (function () {
    function FormComponentsModule() {
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
    return FormComponentsModule;
}());
export { FormComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb21wb25lbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9mb3JtLWNvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUU1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUUzRjtJQUFBO0lBU21DLENBQUM7O2dCQVRuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUM7b0JBQzFFLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsQ0FBQztpQkFDckQ7O0lBQ2tDLDJCQUFDO0NBQUEsQUFUcEMsSUFTb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJvb3RzdHJhcE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Jvb3RzdHJhcC5tb2R1bGUnO1xuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgU3RhclJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1Db3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWNvdW50ZXIvaXRlbS1jb3VudGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmx5TnVtYmVyRGlyZWN0aXZlIH0gZnJvbSAnLi8uLi8uLi9kaXJlY3RpdmVzL29ubHktbnVtYmVyL29ubHktbnVtYmVyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBCb290c3RyYXBNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTdGFyUmF0aW5nQ29tcG9uZW50LFxuICAgIEl0ZW1Db3VudGVyQ29tcG9uZW50LFxuICAgIE9ubHlOdW1iZXJEaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtTdGFyUmF0aW5nQ29tcG9uZW50LCBJdGVtQ291bnRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnRzTW9kdWxlIHt9XG4iXX0=