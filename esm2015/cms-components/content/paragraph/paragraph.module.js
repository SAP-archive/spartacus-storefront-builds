import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph.component';
import { provideDefaultConfig } from '@spartacus/core';
export class CmsParagraphModule {
}
CmsParagraphModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL2NvbnRlbnQvcGFyYWdyYXBoL3BhcmFncmFwaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFvQmxFLE1BQU0sT0FBTyxrQkFBa0I7OztZQWxCOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFZO3dCQUM5QixhQUFhLEVBQUU7NEJBQ2IscUJBQXFCLEVBQUU7Z0NBQ3JCLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCOzRCQUNELHdCQUF3QixFQUFFO2dDQUN4QixTQUFTLEVBQUUsa0JBQWtCOzZCQUM5Qjt5QkFDRjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDN0IsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhcmFncmFwaENvbXBvbmVudCB9IGZyb20gJy4vcGFyYWdyYXBoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbXNDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDTVNQYXJhZ3JhcGhDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFBhcmFncmFwaENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAgQ01TVGFiUGFyYWdyYXBoQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQYXJhZ3JhcGhDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQYXJhZ3JhcGhDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFyYWdyYXBoQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUGFyYWdyYXBoQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFyYWdyYXBoTW9kdWxlIHt9XG4iXX0=