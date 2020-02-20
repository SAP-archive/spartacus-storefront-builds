import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfigModule, CmsPageTitleModule } from '@spartacus/core';
import { BreadcrumbComponent } from './breadcrumb.component';
let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    BreadcrumbComponent: {
                        component: BreadcrumbComponent,
                    },
                },
            }),
            CmsPageTitleModule,
        ],
        declarations: [BreadcrumbComponent],
        exports: [BreadcrumbComponent],
        entryComponents: [BreadcrumbComponent],
    })
], BreadcrumbModule);
export { BreadcrumbModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFhLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFtQjdELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUcsQ0FBQTtBQUFuQixnQkFBZ0I7SUFqQjVCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLG1CQUFtQixFQUFFO3dCQUNuQixTQUFTLEVBQUUsbUJBQW1CO3FCQUMvQjtpQkFDRjthQUNGLENBQUM7WUFDRixrQkFBa0I7U0FDbkI7UUFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztRQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztRQUM5QixlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUN2QyxDQUFDO0dBQ1csZ0JBQWdCLENBQUc7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBDbXNDb25maWcsIENtc1BhZ2VUaXRsZU1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBCcmVhZGNydW1iQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDbXNQYWdlVGl0bGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0JyZWFkY3J1bWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQnJlYWRjcnVtYkNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0JyZWFkY3J1bWJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iTW9kdWxlIHt9XG4iXX0=