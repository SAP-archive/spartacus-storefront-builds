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
export class PaginationModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFXN0QsTUFBTSxPQUFPLGdCQUFnQjs7O1lBVDVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1QsYUFBYSxDQUFDLHVCQUF1QixDQUFDO29CQUN0QyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2lCQUNuRDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdFBhZ2luYXRpb25Db25maWcsIFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdFBhZ2luYXRpb25Db25maWcpLFxuICAgIHsgcHJvdmlkZTogUGFnaW5hdGlvbkNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQYWdpbmF0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BhZ2luYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uTW9kdWxlIHt9XG4iXX0=