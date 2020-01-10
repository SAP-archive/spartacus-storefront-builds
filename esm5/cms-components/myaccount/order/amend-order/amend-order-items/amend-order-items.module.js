/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '@spartacus/core';
import { ItemCounterModule, MediaModule } from '../../../../../shared/index';
import { CancelOrReturnItemsComponent } from './amend-order-items.component';
var AmendOrderItemsModule = /** @class */ (function () {
    function AmendOrderItemsModule() {
    }
    AmendOrderItemsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        I18nModule,
                        MediaModule,
                        ItemCounterModule,
                    ],
                    declarations: [CancelOrReturnItemsComponent],
                    exports: [CancelOrReturnItemsComponent],
                    entryComponents: [CancelOrReturnItemsComponent],
                },] }
    ];
    return AmendOrderItemsModule;
}());
export { AmendOrderItemsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU3RTtJQUFBO0lBWW9DLENBQUM7O2dCQVpwQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsaUJBQWlCO3FCQUNsQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDNUMsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7b0JBQ3ZDLGVBQWUsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUNoRDs7SUFDbUMsNEJBQUM7Q0FBQSxBQVpyQyxJQVlxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEl0ZW1Db3VudGVyTW9kdWxlLCBNZWRpYU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9hbWVuZC1vcmRlci1pdGVtcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FuY2VsT3JSZXR1cm5JdGVtc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2FuY2VsT3JSZXR1cm5JdGVtc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFtZW5kT3JkZXJJdGVtc01vZHVsZSB7fVxuIl19