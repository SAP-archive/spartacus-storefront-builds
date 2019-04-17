/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BootstrapModule } from './../../../bootstrap.module';
/* Components */
import { PaginationComponent } from './pagination/pagination.component';
import { SortingComponent } from './sorting/sorting.component';
var PaginationAndSortingModule = /** @class */ (function () {
    function PaginationAndSortingModule() {
    }
    PaginationAndSortingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgSelectModule, FormsModule, BootstrapModule],
                    declarations: [PaginationComponent, SortingComponent],
                    exports: [PaginationComponent, SortingComponent],
                },] }
    ];
    return PaginationAndSortingModule;
}());
export { PaginationAndSortingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi1hbmQtc29ydGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvY29tcG9uZW50cy9wYWdpbmF0aW9uLWFuZC1zb3J0aW5nL3BhZ2luYXRpb24tYW5kLXNvcnRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFL0Q7SUFBQTtJQUt5QyxDQUFDOztnQkFMekMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQztvQkFDckUsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3JELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO2lCQUNqRDs7SUFDd0MsaUNBQUM7Q0FBQSxBQUwxQyxJQUswQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCb290c3RyYXBNb2R1bGUgfSBmcm9tICcuLy4uLy4uLy4uL2Jvb3RzdHJhcC5tb2R1bGUnO1xuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3J0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi9zb3J0aW5nL3NvcnRpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdTZWxlY3RNb2R1bGUsIEZvcm1zTW9kdWxlLCBCb290c3RyYXBNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtQYWdpbmF0aW9uQ29tcG9uZW50LCBTb3J0aW5nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BhZ2luYXRpb25Db21wb25lbnQsIFNvcnRpbmdDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQW5kU29ydGluZ01vZHVsZSB7fVxuIl19