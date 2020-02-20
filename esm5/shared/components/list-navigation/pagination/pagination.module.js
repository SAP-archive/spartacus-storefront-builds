import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Config, provideConfig } from '@spartacus/core';
import { defaultPaginationConfig, PaginationConfig } from './config/index';
import { PaginationComponent } from './pagination.component';
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        NgModule({
            imports: [CommonModule, RouterModule],
            providers: [
                provideConfig(defaultPaginationConfig),
                { provide: PaginationConfig, useExisting: Config },
            ],
            declarations: [PaginationComponent],
            exports: [PaginationComponent],
        })
    ], PaginationModule);
    return PaginationModule;
}());
export { PaginationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFXN0Q7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQVQ1QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVCxhQUFhLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3RDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7YUFDbkQ7WUFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUMvQixDQUFDO09BQ1csZ0JBQWdCLENBQUc7SUFBRCx1QkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0UGFnaW5hdGlvbkNvbmZpZywgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0UGFnaW5hdGlvbkNvbmZpZyksXG4gICAgeyBwcm92aWRlOiBQYWdpbmF0aW9uQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2luYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFnaW5hdGlvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge31cbiJdfQ==