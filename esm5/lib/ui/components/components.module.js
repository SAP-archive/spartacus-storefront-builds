/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MediaModule } from './media/media.module';
import { FormComponentsModule } from './form-components/form-components.module';
import { CardModule } from './card/card.module';
import { PaginationAndSortingModule } from './pagination-and-sorting/pagination-and-sorting.module';
import { SpinnerModule } from './spinner/spinner.module';
import { GenericLinkModule } from './generic-link/generic-link.module';
/* Components */
import { PictureComponent } from './media/picture/picture.component';
import { StarRatingComponent } from './form-components/star-rating/star-rating.component';
import { ItemCounterComponent } from './form-components/item-counter/item-counter.component';
import { CardComponent } from './card/card.component';
import { PaginationComponent } from './pagination-and-sorting/pagination/pagination.component';
import { SortingComponent } from './pagination-and-sorting/sorting/sorting.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { GenericLinkComponent } from './generic-link/generic-link.component';
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
                        PictureComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFHdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7QUFPN0U7SUFBQTtJQW9CK0IsQ0FBQzs7Z0JBcEIvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixVQUFVO3dCQUNWLDBCQUEwQjt3QkFDMUIsYUFBYTt3QkFDYixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjtxQkFDckI7aUJBQ0Y7O0lBQzhCLHVCQUFDO0NBQUEsQUFwQmhDLElBb0JnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuL21lZGlhL21lZGlhLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50c01vZHVsZSB9IGZyb20gJy4vZm9ybS1jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJy4vY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQW5kU29ydGluZ01vZHVsZSB9IGZyb20gJy4vcGFnaW5hdGlvbi1hbmQtc29ydGluZy9wYWdpbmF0aW9uLWFuZC1zb3J0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IEdlbmVyaWNMaW5rTW9kdWxlIH0gZnJvbSAnLi9nZW5lcmljLWxpbmsvZ2VuZXJpYy1saW5rLm1vZHVsZSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBpY3R1cmVDb21wb25lbnQgfSBmcm9tICcuL21lZGlhL3BpY3R1cmUvcGljdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhclJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1jb21wb25lbnRzL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1jb21wb25lbnRzL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi1hbmQtc29ydGluZy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNvcnRpbmdDb21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24tYW5kLXNvcnRpbmcvc29ydGluZy9zb3J0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEdlbmVyaWNMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9nZW5lcmljLWxpbmsvZ2VuZXJpYy1saW5rLmNvbXBvbmVudCc7XG5cbi8vIHdlIGluY2x1ZGUgYWxsIFVJIGNvbXBvbmVudCBtb2R1bGVzIGhlcmUsIGJ1dCBpbiByZWFsIGxpdmVcbi8vIHByb2plY3RzIHdvdWxkIG9ubHkgaW5jbHVkZSB0aG9zZSB0aGF0IGFyZSByZWxldmFudC5cbi8vIGZvciBcImFjY2VsZXJhdG9yc1wiLCB3ZSBjb3VsZCBpbmNsdWRlIG9ubHkgdGhvc2UgdGhhdCBhcmUgcmVsZXZhbnQsIHNvIHRoaXNcbi8vIGNvbXBvbmVudCBtb2R1bGUgY291bGQgYmUgY29uZmlndXJhYmxlIG9yIHdlIGNvdWxkIGhhdmUgc2VwYXJhdGUgY29tcG9uZW50IG1vZHVsZXMsXG4vLyBpLmUuIHBvd2VydG9vbHMtY29tcG9uZW50cy5tb2R1bGUuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWVkaWFNb2R1bGUsXG4gICAgRm9ybUNvbXBvbmVudHNNb2R1bGUsXG4gICAgQ2FyZE1vZHVsZSxcbiAgICBQYWdpbmF0aW9uQW5kU29ydGluZ01vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIEdlbmVyaWNMaW5rTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUGljdHVyZUNvbXBvbmVudCxcbiAgICBTdGFyUmF0aW5nQ29tcG9uZW50LFxuICAgIEl0ZW1Db3VudGVyQ29tcG9uZW50LFxuICAgIENhcmRDb21wb25lbnQsXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICBTb3J0aW5nQ29tcG9uZW50LFxuICAgIFNwaW5uZXJDb21wb25lbnQsXG4gICAgR2VuZXJpY0xpbmtDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge31cbiJdfQ==