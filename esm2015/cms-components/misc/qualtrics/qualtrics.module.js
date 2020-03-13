import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '@spartacus/core';
import { defaultQualtricsConfig } from './config/default-qualtrics-config';
import { QualtricsConfig } from './config/qualtrics-config';
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
            {
                provide: QualtricsConfig,
                useExisting: Config,
            },
        ],
    })
], QualtricsModule);
export { QualtricsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFzQjNELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7Q0FBRyxDQUFBO0FBQWxCLGVBQWU7SUFwQjNCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztRQUN6QyxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNsQyxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNyQyxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBWTtnQkFDOUIsYUFBYSxFQUFFO29CQUNiLGtCQUFrQixFQUFFO3dCQUNsQixTQUFTLEVBQUUsa0JBQWtCO3FCQUM5QjtpQkFDRjthQUNGLENBQUM7WUFDRixvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztZQUU1QztnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsV0FBVyxFQUFFLE1BQU07YUFDcEI7U0FDRjtLQUNGLENBQUM7R0FDVyxlQUFlLENBQUc7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0UXVhbHRyaWNzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1xdWFsdHJpY3MtY29uZmlnJztcbmltcG9ydCB7IFF1YWx0cmljc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3F1YWx0cmljcy1jb25maWcnO1xuaW1wb3J0IHsgUXVhbHRyaWNzQ29tcG9uZW50IH0gZnJvbSAnLi9xdWFsdHJpY3MuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1F1YWx0cmljc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1F1YWx0cmljc0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBRdWFsdHJpY3NDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFF1YWx0cmljc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFF1YWx0cmljc0NvbmZpZyksXG5cbiAgICB7XG4gICAgICBwcm92aWRlOiBRdWFsdHJpY3NDb25maWcsXG4gICAgICB1c2VFeGlzdGluZzogQ29uZmlnLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFF1YWx0cmljc01vZHVsZSB7fVxuIl19