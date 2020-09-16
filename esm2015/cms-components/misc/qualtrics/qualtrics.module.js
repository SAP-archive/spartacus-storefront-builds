import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultQualtricsConfig } from './config/default-qualtrics-config';
import { QualtricsComponent } from './qualtrics.component';
export class QualtricsModule {
}
QualtricsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                declarations: [QualtricsComponent],
                entryComponents: [QualtricsComponent],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            QualtricsComponent: {
                                component: QualtricsComponent,
                            },
                        },
                    }),
                    provideDefaultConfig(defaultQualtricsConfig),
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFpQjNELE1BQU0sT0FBTyxlQUFlOzs7WUFmM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztnQkFDekMsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQVk7d0JBQzlCLGFBQWEsRUFBRTs0QkFDYixrQkFBa0IsRUFBRTtnQ0FDbEIsU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUI7eUJBQ0Y7cUJBQ0YsQ0FBQztvQkFDRixvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDN0M7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdFF1YWx0cmljc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtcXVhbHRyaWNzLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWFsdHJpY3NDb21wb25lbnQgfSBmcm9tICcuL3F1YWx0cmljcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUXVhbHRyaWNzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUXVhbHRyaWNzQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFF1YWx0cmljc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUXVhbHRyaWNzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0UXVhbHRyaWNzQ29uZmlnKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUXVhbHRyaWNzTW9kdWxlIHt9XG4iXX0=