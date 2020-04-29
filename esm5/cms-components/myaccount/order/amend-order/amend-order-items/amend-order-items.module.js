import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule, FeaturesConfigModule } from '@spartacus/core';
import { FormErrorsModule, ItemCounterModule, MediaModule, } from '../../../../../shared/index';
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
                FormErrorsModule,
            ],
            declarations: [CancelOrReturnItemsComponent],
            exports: [CancelOrReturnItemsComponent],
            entryComponents: [CancelOrReturnItemsComponent],
        })
    ], AmendOrderItemsModule);
    return AmendOrderItemsModule;
}());
export { AmendOrderItemsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1lbmQtb3JkZXItaXRlbXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2FtZW5kLW9yZGVyLWl0ZW1zL2FtZW5kLW9yZGVyLWl0ZW1zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLFdBQVcsR0FDWixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBZ0I3RTtJQUFBO0lBQW9DLENBQUM7SUFBeEIscUJBQXFCO1FBZGpDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLG1CQUFtQjtnQkFDbkIsVUFBVTtnQkFDVixXQUFXO2dCQUNYLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQixnQkFBZ0I7YUFDakI7WUFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUM1QyxPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN2QyxlQUFlLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUNoRCxDQUFDO09BQ1cscUJBQXFCLENBQUc7SUFBRCw0QkFBQztDQUFBLEFBQXJDLElBQXFDO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEkxOG5Nb2R1bGUsIEZlYXR1cmVzQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEZvcm1FcnJvcnNNb2R1bGUsXG4gIEl0ZW1Db3VudGVyTW9kdWxlLFxuICBNZWRpYU1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IENhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2FtZW5kLW9yZGVyLWl0ZW1zLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIEl0ZW1Db3VudGVyTW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICAgIEZvcm1FcnJvcnNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FuY2VsT3JSZXR1cm5JdGVtc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhbmNlbE9yUmV0dXJuSXRlbXNDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBbWVuZE9yZGVySXRlbXNNb2R1bGUge31cbiJdfQ==