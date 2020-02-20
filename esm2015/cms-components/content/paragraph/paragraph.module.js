import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph.component';
import { ConfigModule } from '@spartacus/core';
let CmsParagraphModule = class CmsParagraphModule {
};
CmsParagraphModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    CMSParagraphComponent: {
                        component: ParagraphComponent,
                    },
                    CMSTabParagraphComponent: {
                        component: ParagraphComponent,
                    },
                },
            }),
        ],
        declarations: [ParagraphComponent],
        exports: [ParagraphComponent],
        entryComponents: [ParagraphComponent],
    })
], CmsParagraphModule);
export { CmsParagraphModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvcGFyYWdyYXBoL3BhcmFncmFwaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQXFCL0MsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7Q0FBRyxDQUFBO0FBQXJCLGtCQUFrQjtJQWxCOUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYixxQkFBcUIsRUFBRTt3QkFDckIsU0FBUyxFQUFFLGtCQUFrQjtxQkFDOUI7b0JBQ0Qsd0JBQXdCLEVBQUU7d0JBQ3hCLFNBQVMsRUFBRSxrQkFBa0I7cUJBQzlCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDN0IsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGtCQUFrQixDQUFHO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGFyYWdyYXBoQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJhZ3JhcGguY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNQYXJhZ3JhcGhDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFBhcmFncmFwaENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQ01TVGFiUGFyYWdyYXBoQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQYXJhZ3JhcGhDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQYXJhZ3JhcGhDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFyYWdyYXBoQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGFyYWdyYXBoQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFyYWdyYXBoTW9kdWxlIHt9XG4iXX0=