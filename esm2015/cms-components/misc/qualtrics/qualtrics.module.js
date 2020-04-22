import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultQualtricsConfig } from './config/default-qualtrics-config';
import { QualtricsComponent } from './qualtrics.component';
let QualtricsModule = class QualtricsModule {
};
QualtricsModule = __decorate([
    NgModule({
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
    })
], QualtricsModule);
export { QualtricsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBaUIzRCxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUcsQ0FBQTtBQUFsQixlQUFlO0lBZjNCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztRQUN6QyxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNsQyxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNyQyxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBWTtnQkFDOUIsYUFBYSxFQUFFO29CQUNiLGtCQUFrQixFQUFFO3dCQUNsQixTQUFTLEVBQUUsa0JBQWtCO3FCQUM5QjtpQkFDRjthQUNGLENBQUM7WUFDRixvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztTQUM3QztLQUNGLENBQUM7R0FDVyxlQUFlLENBQUc7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdFF1YWx0cmljc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtcXVhbHRyaWNzLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWFsdHJpY3NDb21wb25lbnQgfSBmcm9tICcuL3F1YWx0cmljcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUXVhbHRyaWNzQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUXVhbHRyaWNzQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFF1YWx0cmljc0NvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUXVhbHRyaWNzQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0UXVhbHRyaWNzQ29uZmlnKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUXVhbHRyaWNzTW9kdWxlIHt9XG4iXX0=