/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Config, provideConfig } from '@spartacus/core';
import { defaultPaginationConfig, PaginationConfig } from './config/index';
import { PaginationComponent } from './pagination.component';
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
                    providers: [
                        provideConfig(defaultPaginationConfig),
                        { provide: PaginationConfig, useExisting: Config },
                    ],
                    declarations: [PaginationComponent],
                    exports: [PaginationComponent],
                },] }
    ];
    return PaginationModule;
}());
export { PaginationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0Q7SUFBQTtJQVMrQixDQUFDOztnQkFUL0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7b0JBQ3JDLFNBQVMsRUFBRTt3QkFDVCxhQUFhLENBQUMsdUJBQXVCLENBQUM7d0JBQ3RDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7cUJBQ25EO29CQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0I7O0lBQzhCLHVCQUFDO0NBQUEsQUFUaEMsSUFTZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGRlZmF1bHRQYWdpbmF0aW9uQ29uZmlnLCBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRQYWdpbmF0aW9uQ29uZmlnKSxcbiAgICB7IHByb3ZpZGU6IFBhZ2luYXRpb25Db25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFnaW5hdGlvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQYWdpbmF0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk1vZHVsZSB7fVxuIl19