import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph.component';
import { provideDefaultConfig } from '@spartacus/core';
let CmsParagraphModule = class CmsParagraphModule {
};
CmsParagraphModule = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [
            provideDefaultConfig({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvcGFyYWdyYXBoL3BhcmFncmFwaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBb0JsRSxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQUFHLENBQUE7QUFBckIsa0JBQWtCO0lBbEI5QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYixxQkFBcUIsRUFBRTt3QkFDckIsU0FBUyxFQUFFLGtCQUFrQjtxQkFDOUI7b0JBQ0Qsd0JBQXdCLEVBQUU7d0JBQ3hCLFNBQVMsRUFBRSxrQkFBa0I7cUJBQzlCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDN0IsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDdEMsQ0FBQztHQUNXLGtCQUFrQixDQUFHO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGFyYWdyYXBoQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJhZ3JhcGguY29tcG9uZW50JztcbmltcG9ydCB7IENtc0NvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENNU1BhcmFncmFwaENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUGFyYWdyYXBoQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICBDTVNUYWJQYXJhZ3JhcGhDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFBhcmFncmFwaENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BhcmFncmFwaENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQYXJhZ3JhcGhDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtQYXJhZ3JhcGhDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNQYXJhZ3JhcGhNb2R1bGUge31cbiJdfQ==