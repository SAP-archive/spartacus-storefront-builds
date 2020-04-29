import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule, FeaturesConfigModule } from '@spartacus/core';
import { FormErrorsModule, ItemCounterModule, MediaModule, } from '../../../../../shared/index';
import { CancelOrReturnItemsComponent } from './amend-order-items.component';
let AmendOrderItemsModule = class AmendOrderItemsModule {
};
AmendOrderItemsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            I18nModule,
            MediaModule,
            ItemCounterModule,
            FeaturesConfigModule,
            FormErrorsModule,
        ],
        declarations: [CancelOrReturnItemsComponent],
        exports: [CancelOrReturnItemsComponent],
        entryComponents: [CancelOrReturnItemsComponent],
    })
], AmendOrderItemsModule);
export { AmendOrderItemsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFdBQVcsR0FDWixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBZ0I3RSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtDQUFHLENBQUE7QUFBeEIscUJBQXFCO0lBZGpDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtTQUNqQjtRQUNELFlBQVksRUFBRSxDQUFDLDRCQUE0QixDQUFDO1FBQzVDLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixDQUFDO1FBQ3ZDLGVBQWUsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQ2hELENBQUM7R0FDVyxxQkFBcUIsQ0FBRztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJMThuTW9kdWxlLCBGZWF0dXJlc0NvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtRXJyb3JzTW9kdWxlLFxuICBJdGVtQ291bnRlck1vZHVsZSxcbiAgTWVkaWFNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9hbWVuZC1vcmRlci1pdGVtcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgICBGb3JtRXJyb3JzTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQW1lbmRPcmRlckl0ZW1zTW9kdWxlIHt9XG4iXX0=