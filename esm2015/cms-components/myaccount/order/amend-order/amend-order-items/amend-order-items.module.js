import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule, FeaturesConfigModule } from '@spartacus/core';
import { ItemCounterModule, MediaModule } from '../../../../../shared/index';
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
        ],
        declarations: [CancelOrReturnItemsComponent],
        exports: [CancelOrReturnItemsComponent],
        entryComponents: [CancelOrReturnItemsComponent],
    })
], AmendOrderItemsModule);
export { AmendOrderItemsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWU3RSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtDQUFHLENBQUE7QUFBeEIscUJBQXFCO0lBYmpDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsVUFBVTtZQUNWLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsb0JBQW9CO1NBQ3JCO1FBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7UUFDNUMsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7UUFDdkMsZUFBZSxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDaEQsQ0FBQztHQUNXLHFCQUFxQixDQUFHO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEkxOG5Nb2R1bGUsIEZlYXR1cmVzQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEl0ZW1Db3VudGVyTW9kdWxlLCBNZWRpYU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9hbWVuZC1vcmRlci1pdGVtcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBJdGVtQ291bnRlck1vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FuY2VsT3JSZXR1cm5JdGVtc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYW5jZWxPclJldHVybkl0ZW1zQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2FuY2VsT3JSZXR1cm5JdGVtc0NvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEFtZW5kT3JkZXJJdGVtc01vZHVsZSB7fVxuIl19