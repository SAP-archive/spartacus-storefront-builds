import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { NavigationModule } from '../navigation/navigation.module';
import { CategoryNavigationComponent } from './category-navigation.component';
let CategoryNavigationModule = class CategoryNavigationModule {
};
CategoryNavigationModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            NavigationModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    CategoryNavigationComponent: {
                        component: CategoryNavigationComponent,
                    },
                },
            }),
        ],
        declarations: [CategoryNavigationComponent],
        entryComponents: [CategoryNavigationComponent],
        exports: [CategoryNavigationComponent],
    })
], CategoryNavigationModule);
export { CategoryNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24vY2F0ZWdvcnktbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQWtCOUUsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7Q0FBRyxDQUFBO0FBQTNCLHdCQUF3QjtJQWhCcEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2IsMkJBQTJCLEVBQUU7d0JBQzNCLFNBQVMsRUFBRSwyQkFBMkI7cUJBQ3ZDO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7UUFDM0MsZUFBZSxFQUFFLENBQUMsMkJBQTJCLENBQUM7UUFDOUMsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDdkMsQ0FBQztHQUNXLHdCQUF3QixDQUFHO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yeS1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=