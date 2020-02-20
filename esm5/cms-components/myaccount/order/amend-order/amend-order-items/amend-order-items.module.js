import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule, FeaturesConfigModule } from '@spartacus/core';
import { ItemCounterModule, MediaModule } from '../../../../../shared/index';
import { CancelOrReturnItemsComponent } from './amend-order-items.component';
var AmendOrderItemsModule = /** @class */ (function () {
    function AmendOrderItemsModule() {
    }
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
    return AmendOrderItemsModule;
}());
export { AmendOrderItemsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWU3RTtJQUFBO0lBQW9DLENBQUM7SUFBeEIscUJBQXFCO1FBYmpDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsVUFBVTtnQkFDVixXQUFXO2dCQUNYLGlCQUFpQjtnQkFDakIsb0JBQW9CO2FBQ3JCO1lBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDNUMsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDdkMsZUFBZSxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDaEQsQ0FBQztPQUNXLHFCQUFxQixDQUFHO0lBQUQsNEJBQUM7Q0FBQSxBQUFyQyxJQUFxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJMThuTW9kdWxlLCBGZWF0dXJlc0NvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJdGVtQ291bnRlck1vZHVsZSwgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgQ2FuY2VsT3JSZXR1cm5JdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vYW1lbmQtb3JkZXItaXRlbXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgSXRlbUNvdW50ZXJNb2R1bGUsXG4gICAgRmVhdHVyZXNDb25maWdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FuY2VsT3JSZXR1cm5JdGVtc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBbWVuZE9yZGVySXRlbXNNb2R1bGUge31cbiJdfQ==