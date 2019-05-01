/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardModule } from './card/card.module';
import { FormComponentsModule } from './form-components/form-components.module';
import { ItemCounterComponent } from './form-components/item-counter/item-counter.component';
import { StarRatingComponent } from './form-components/star-rating/star-rating.component';
import { GenericLinkComponent } from './generic-link/generic-link.component';
import { GenericLinkModule } from './generic-link/generic-link.module';
import { MediaComponent } from './media/media.component';
import { MediaModule } from './media/media.module';
import { PaginationAndSortingModule } from './pagination-and-sorting/pagination-and-sorting.module';
import { PaginationComponent } from './pagination-and-sorting/pagination/pagination.component';
import { SortingComponent } from './pagination-and-sorting/sorting/sorting.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerModule } from './spinner/spinner.module';
// we include all UI component modules here, but in real live
// projects would only include those that are relevant.
// for "accelerators", we could include only those that are relevant, so this
// component module could be configurable or we could have separate component modules,
// i.e. powertools-components.module.
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MediaModule,
                        FormComponentsModule,
                        CardModule,
                        PaginationAndSortingModule,
                        SpinnerModule,
                        GenericLinkModule,
                    ],
                    exports: [
                        MediaComponent,
                        StarRatingComponent,
                        ItemCounterComponent,
                        CardComponent,
                        PaginationComponent,
                        SortingComponent,
                        SpinnerComponent,
                        GenericLinkComponent,
                    ],
                },] }
    ];
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDcEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDL0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFPekQ7SUFBQTtJQW9CK0IsQ0FBQzs7Z0JBcEIvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixVQUFVO3dCQUNWLDBCQUEwQjt3QkFDMUIsYUFBYTt3QkFDYixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjtxQkFDckI7aUJBQ0Y7O0lBQzhCLHVCQUFDO0NBQUEsQUFwQmhDLElBb0JnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAnLi9jYXJkL2NhcmQubW9kdWxlJztcbmltcG9ydCB7IEZvcm1Db21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi9mb3JtLWNvbXBvbmVudHMvZm9ybS1jb21wb25lbnRzLm1vZHVsZSc7XG5pbXBvcnQgeyBJdGVtQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1jb21wb25lbnRzL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0YXJSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL2Zvcm0tY29tcG9uZW50cy9zdGFyLXJhdGluZy9zdGFyLXJhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VuZXJpY0xpbmtDb21wb25lbnQgfSBmcm9tICcuL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IEdlbmVyaWNMaW5rTW9kdWxlIH0gZnJvbSAnLi9nZW5lcmljLWxpbmsvZ2VuZXJpYy1saW5rLm1vZHVsZSc7XG5pbXBvcnQgeyBNZWRpYUNvbXBvbmVudCB9IGZyb20gJy4vbWVkaWEvbWVkaWEuY29tcG9uZW50JztcbmltcG9ydCB7IE1lZGlhTW9kdWxlIH0gZnJvbSAnLi9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkFuZFNvcnRpbmdNb2R1bGUgfSBmcm9tICcuL3BhZ2luYXRpb24tYW5kLXNvcnRpbmcvcGFnaW5hdGlvbi1hbmQtc29ydGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi1hbmQtc29ydGluZy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNvcnRpbmdDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24tYW5kLXNvcnRpbmcvc29ydGluZy9zb3J0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuXG4vLyB3ZSBpbmNsdWRlIGFsbCBVSSBjb21wb25lbnQgbW9kdWxlcyBoZXJlLCBidXQgaW4gcmVhbCBsaXZlXG4vLyBwcm9qZWN0cyB3b3VsZCBvbmx5IGluY2x1ZGUgdGhvc2UgdGhhdCBhcmUgcmVsZXZhbnQuXG4vLyBmb3IgXCJhY2NlbGVyYXRvcnNcIiwgd2UgY291bGQgaW5jbHVkZSBvbmx5IHRob3NlIHRoYXQgYXJlIHJlbGV2YW50LCBzbyB0aGlzXG4vLyBjb21wb25lbnQgbW9kdWxlIGNvdWxkIGJlIGNvbmZpZ3VyYWJsZSBvciB3ZSBjb3VsZCBoYXZlIHNlcGFyYXRlIGNvbXBvbmVudCBtb2R1bGVzLFxuLy8gaS5lLiBwb3dlcnRvb2xzLWNvbXBvbmVudHMubW9kdWxlLlxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1lZGlhTW9kdWxlLFxuICAgIEZvcm1Db21wb25lbnRzTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgUGFnaW5hdGlvbkFuZFNvcnRpbmdNb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBHZW5lcmljTGlua01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1lZGlhQ29tcG9uZW50LFxuICAgIFN0YXJSYXRpbmdDb21wb25lbnQsXG4gICAgSXRlbUNvdW50ZXJDb21wb25lbnQsXG4gICAgQ2FyZENvbXBvbmVudCxcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIFNvcnRpbmdDb21wb25lbnQsXG4gICAgU3Bpbm5lckNvbXBvbmVudCxcbiAgICBHZW5lcmljTGlua0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7fVxuIl19