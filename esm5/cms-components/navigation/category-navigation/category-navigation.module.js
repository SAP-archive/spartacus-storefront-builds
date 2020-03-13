import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { NavigationModule } from '../navigation/navigation.module';
import { CategoryNavigationComponent } from './category-navigation.component';
var CategoryNavigationModule = /** @class */ (function () {
    function CategoryNavigationModule() {
    }
    CategoryNavigationModule = __decorate([
        NgModule({
            imports: [CommonModule, NavigationModule],
            providers: [
                provideDefaultConfig({
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
    return CategoryNavigationModule;
}());
export { CategoryNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24vY2F0ZWdvcnktbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBaUI5RTtJQUFBO0lBQXVDLENBQUM7SUFBM0Isd0JBQXdCO1FBZnBDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztZQUN6QyxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYiwyQkFBMkIsRUFBRTs0QkFDM0IsU0FBUyxFQUFFLDJCQUEyQjt5QkFDdkM7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDM0MsZUFBZSxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDOUMsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDdkMsQ0FBQztPQUNXLHdCQUF3QixDQUFHO0lBQUQsK0JBQUM7Q0FBQSxBQUF4QyxJQUF3QztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yeS1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5hdmlnYXRpb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlOYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=