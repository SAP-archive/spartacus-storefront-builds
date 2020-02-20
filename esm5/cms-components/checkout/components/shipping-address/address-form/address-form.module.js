import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from '@spartacus/core';
import { AutoFocusDirectiveModule } from '../../../../../shared/directives/auto-focus/auto-focus.directive.module';
import { IconModule } from '../../../../misc/icon/index';
import { AddressFormComponent } from './address-form.component';
import { SuggestedAddressDialogComponent } from './suggested-addresses-dialog/suggested-addresses-dialog.component';
var AddressFormModule = /** @class */ (function () {
    function AddressFormModule() {
    }
    AddressFormModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                FormsModule,
                RouterModule,
                NgSelectModule,
                IconModule,
                I18nModule,
                AutoFocusDirectiveModule,
            ],
            declarations: [AddressFormComponent, SuggestedAddressDialogComponent],
            entryComponents: [SuggestedAddressDialogComponent],
            exports: [AddressFormComponent, SuggestedAddressDialogComponent],
        })
    ], AddressFormModule);
    return AddressFormModule;
}());
export { AddressFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1mb3JtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NvbXBvbmVudHMvc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vYWRkcmVzcy1mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQWlCcEg7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGlCQUFpQjtRQWY3QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixjQUFjO2dCQUNkLFVBQVU7Z0JBQ1YsVUFBVTtnQkFDVix3QkFBd0I7YUFDekI7WUFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwrQkFBK0IsQ0FBQztZQUNyRSxlQUFlLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUNsRCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSwrQkFBK0IsQ0FBQztTQUNqRSxDQUFDO09BQ1csaUJBQWlCLENBQUc7SUFBRCx3QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XG5pbXBvcnQgeyBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0RpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL2F1dG8tZm9jdXMvYXV0by1mb2N1cy5kaXJlY3RpdmUubW9kdWxlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzc0Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2FkZHJlc3MtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cvc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQXV0b0ZvY3VzRGlyZWN0aXZlTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBZGRyZXNzRm9ybUNvbXBvbmVudCwgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1N1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWRkcmVzc0Zvcm1Db21wb25lbnQsIFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzRm9ybU1vZHVsZSB7fVxuIl19